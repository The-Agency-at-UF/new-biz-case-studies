"use client";

import NavBar from "../../components/NavBar";
import WelcomeCard from "./components/welcomeCard";
import AdminBkgd from "./components/adminBkgd";
import SearchCard from "./components/searchCard";
import CaseStudiesCard from "./components/caseStudiesCard";
import AddCompanyButton from "./components/addCompanyButton";
import CompaniesCard from "./components/companiesCard";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  fetchOverview,
  checkWhitelist,
  deleteCompany,
  deleteCaseStudy,
  insertCompany,
  insertCaseStudy,
  updateCompany,
  updateCaseStudy,
  updateCaseStudyTags,
  fetchCaseStudies,
} from "./backend/backend";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [isLoadingWhitelist, setIsLoadingWhitelist] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCaseStudyTags, setSelectedCaseStudyTags] = useState<string[]>([]);
  const [selectedCompanyTag, setSelectedCompanyTag] = useState<string | null>(null);
  const [selectedCompanyForEdit, setSelectedCompanyForEdit] = useState<any | null>(null);
  const [selectedCaseStudyIDs, setSelectedCaseStudyIDs] = useState<string[]>([]);

  const email = session?.user?.email ?? undefined; 

  const fetchData = async () => {
  setIsLoadingData(true);
  try {
    const overviewData = await fetchOverview();
    const caseStudyData = await fetchCaseStudies();

    setData(overviewData);
    setCaseStudies(caseStudyData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setIsLoadingData(false);
  }
};

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && email) {
      const runWhitelistCheck = async () => {
        setIsLoadingWhitelist(true);
        try {
          const data = await checkWhitelist(email);
          if (data.isWhitelisted) {
            setIsWhitelisted(true);
          } else {
            router.push("/");
          }
        } catch (error) {
          console.error("Error checking whitelist:", error);
          router.push("/");
        } finally {
          setIsLoadingWhitelist(false);
        }
      };
      runWhitelistCheck();
    }
  }, [session, status, router, email]);

  useEffect(() => {
    if (isWhitelisted) {
      fetchData();
    }
  }, [isWhitelisted]);

  const handleDeleteCompany = async (companyID: string) => {
    if (!confirm(`Are you sure you want to delete company ${companyID}?`))
      return;

    try {
      const response = await deleteCompany(companyID);
      if (response.ok) {
        fetchData();
      } else {
        alert("Failed to delete company");
      }
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  useEffect(() => {
  if (selectedCompanyForEdit) {
    setSelectedCaseStudyIDs(selectedCompanyForEdit.CaseStudies || []);
  } else {
    setSelectedCaseStudyIDs([]);
  }
  }, [selectedCompanyForEdit]);

  const handleDeleteCaseStudy = async (
    caseStudyID: string,
  ) => {
    if (!confirm(`Are you sure you want to delete case study ${caseStudyID}?`))
      return;

    try {
      const response = await deleteCaseStudy(caseStudyID);
      if (response.ok) {
        fetchData();
      } else {
        alert("Failed to delete case study");
      }
    } catch (error) {
      console.error("Error deleting case study:", error);
    }
  };

  if (status === "loading" || isLoadingWhitelist) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-background">
        <NavBar />
        <div>
          <h1 className="text-foreground text-2xl">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!isWhitelisted) {
    return null;
  }

  const companyCount = data.length;

  const caseStudyCount = caseStudies.length;

  const allCaseStudyTags = Array.from(
    new Set(caseStudies.flatMap(cs => cs.Tags || []))
  );

  const allCompanyTags = Array.from(
    new Set(data.map(company => company.Industry).filter(Boolean))
  );

  const filteredCaseStudies = caseStudies
    .filter(cs =>
      cs.Name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(cs =>
      selectedCaseStudyTags.length === 0
        ? true
        : selectedCaseStudyTags.every(tag =>
            cs.Tags?.includes(tag)
          )
    );

  const filteredData = data
    .filter(company =>
      company.Name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(company =>
      selectedCompanyTag
        ? company.Industry === selectedCompanyTag
        : true
    );

  return (
    <div className="max-h-screen flex flex-col text-foreground pt-30 pb-20 pl-10">
      <NavBar />
      <AdminBkgd />

      <div className="flex gap-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <WelcomeCard
              email={email}
              onLogout={() => signOut({ callbackUrl: "/login" })}
            />

            <SearchCard
              search={search}
              setSearch={setSearch}
              companyCount={companyCount}
              caseStudyCount={caseStudyCount}
            />
          </div>

          <CaseStudiesCard
            caseStudies={filteredCaseStudies}
            selectedTags={selectedCaseStudyTags}
            setSelectedTags={setSelectedCaseStudyTags}
            allTags={allCaseStudyTags}
            selectedCaseStudyIDs={selectedCaseStudyIDs}
            setSelectedCaseStudyIDs={setSelectedCaseStudyIDs}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          <AddCompanyButton />

          <CompaniesCard
            companies={filteredData}
            selectedTag={selectedCompanyTag}
            setSelectedTag={setSelectedCompanyTag}
            allTags={allCompanyTags}
            onCompanyClick={(company) => {

              if (selectedCompanyForEdit?.CompanyID === company.CompanyID) {

                setSelectedCompanyForEdit(null);
                setSelectedCaseStudyIDs([]);

              } else {

                const extractedIDs = (company.CaseStudies || []).map((cs: any) => {
                  return cs.CaseStudyID;
                });

                setSelectedCompanyForEdit(company);
                setSelectedCaseStudyIDs(extractedIDs);
              }
            }}
            selectedCompanyForEdit={selectedCompanyForEdit}
          />
        </div>

      </div>
    </div>
    
  );
}
