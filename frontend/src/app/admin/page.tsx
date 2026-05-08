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

      if (selectedCompanyForEdit) {
        const updated = overviewData.find(
          (c: any) => c.CompanyID === selectedCompanyForEdit.CompanyID
        );

        if (updated) {
          setSelectedCompanyForEdit(updated);
          setSelectedCaseStudyIDs(
            (updated.CaseStudies || []).map((cs: any) =>
              typeof cs === "string" ? cs : cs.CaseStudyID
            )
          );
        }
      }
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

  const handleToggleCaseStudy = async (
    caseStudyID: string,
    isChecked: boolean
  ) => {
    if (!selectedCompanyForEdit) return;

    const currentIDs = selectedCaseStudyIDs.map((id: any) =>
      typeof id === "string" ? id : id.CaseStudyID
    );

    const updatedIDs = isChecked
      ? [...currentIDs, caseStudyID]
      : currentIDs.filter((id) => id !== caseStudyID);

    console.log("sending to backend:", updatedIDs);

    try {
      await updateCompany(selectedCompanyForEdit.CompanyID, {
        Name: selectedCompanyForEdit.Name,
        Industry: selectedCompanyForEdit.Industry,
        CaseStudies: updatedIDs,
      });

      fetchData();
    } catch (error) {
      console.error("Error updating company case studies:", error);
    }
  };

  useEffect(() => {
    if (selectedCompanyForEdit) {
      setSelectedCaseStudyIDs(selectedCompanyForEdit.CaseStudies || []);
    } else {
      setSelectedCaseStudyIDs([]);
    }
  }, [selectedCompanyForEdit]);

  const handleDeleteCaseStudy = async (caseStudyID: string) => {
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
    new Set(caseStudies.flatMap((cs) => cs.Tags || []))
  );

  const allCompanyTags = Array.from(
    new Set(data.map((company) => company.Industry).filter(Boolean))
  );

  const filteredCaseStudies = caseStudies
    .filter((cs) => cs.Name.toLowerCase().includes(search.toLowerCase()))
    .filter((cs) =>
      selectedCaseStudyTags.length === 0
        ? true
        : selectedCaseStudyTags.every((tag) => cs.Tags?.includes(tag))
    );

  const filteredData = data
    .filter((company) =>
      company.Name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((company) =>
      selectedCompanyTag ? company.Industry === selectedCompanyTag : true
    );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-foreground px-4 sm:px-6 lg:px-10 pt-28 pb-10">
      <NavBar />
      <AdminBkgd />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        {/* LEFT SIDE */}
        <div className="flex min-w-0 flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(280px,325px)_minmax(280px,1fr)]">
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
            companies={data}
            selectedTags={selectedCaseStudyTags}
            setSelectedTags={setSelectedCaseStudyTags}
            allTags={allCaseStudyTags}
            selectedCaseStudyIDs={selectedCaseStudyIDs}
            setSelectedCaseStudyIDs={setSelectedCaseStudyIDs}
            onToggleCaseStudy={handleToggleCaseStudy}
            isEditingCompany={selectedCompanyForEdit !== null}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-w-0 flex-col gap-6">
          <AddCompanyButton onCompanyAdded={fetchData} />

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
                const extractedIDs = (company.CaseStudies || []).map(
                  (cs: any) => {
                    return typeof cs === "string" ? cs : cs.CaseStudyID;
                  }
                );

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