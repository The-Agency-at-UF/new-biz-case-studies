"use client";

import NavBar from "../../components/NavBar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [isLoadingWhitelist, setIsLoadingWhitelist] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const fetchData = async () => {
    setIsLoadingData(true);
    try {
      const response = await fetch("http://localhost:8080/api/overview");
      const overviewData = await response.json();
      setData(overviewData);
    } catch (error) {
      console.error("Error fetching overview data:", error);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && session?.user?.email) {
      const checkWhitelist = async () => {
        setIsLoadingWhitelist(true);
        try {
          const response = await fetch(
            "http://localhost:8080/api/check-whitelist",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: session.user.email }),
            },
          );
          const data = await response.json();
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
      checkWhitelist();
    }
  }, [session, status, router]);

  useEffect(() => {
    if (isWhitelisted) {
      fetchData();
    }
  }, [isWhitelisted]);

  const handleDeleteCompany = async (companyID: string) => {
    if (!confirm(`Are you sure you want to delete company ${companyID}?`))
      return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/company/${companyID}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        fetchData();
      } else {
        alert("Failed to delete company");
      }
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  const handleDeleteCaseStudy = async (
    companyID: string,
    templateID: string,
  ) => {
    if (!confirm(`Are you sure you want to delete case study ${templateID}?`))
      return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/casestudy/${companyID}/${templateID}`,
        {
          method: "DELETE",
        },
      );
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground py-20">
      <NavBar />
      <div className="w-full max-w-5xl px-6 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-neutral-400 mt-2">
              Logged in as:{" "}
              <span className="text-foreground font-semibold">
                {session?.user?.email}
              </span>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/formBuilder")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white font-medium shadow-lg"
            >
              + New Case Study
            </button>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded text-white font-medium border border-neutral-700"
            >
              Logout
            </button>
          </div>
        </div>

        <section className="bg-neutral-900/50 rounded-2xl p-8 shadow-2xl border border-neutral-800 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
            <h2 className="text-2xl font-bold">Portfolio Management</h2>
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20">
              {data.length} Companies Total
            </span>
          </div>

          {isLoadingData ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center py-12 bg-neutral-800/20 rounded-xl border border-dashed border-neutral-700">
              <p className="text-neutral-500">
                No companies or case studies found in the database.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {data.map((company: any) => (
                <div
                  key={company.CompanyID}
                  className="bg-neutral-800/30 rounded-xl border border-neutral-700 overflow-hidden transition-all hover:border-neutral-600 shadow-lg"
                >
                  <div className="bg-neutral-800/50 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-700">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">
                          {company.Name}
                        </h3>
                        <span className="text-[10px] font-mono bg-neutral-700 text-neutral-400 px-2 py-0.5 rounded uppercase tracking-tighter">
                          {company.CompanyID}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400 font-medium">
                        {company.Industry || "Uncategorized"}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteCompany(company.CompanyID)}
                      className="text-xs text-red-400 hover:text-red-300 hover:bg-red-400/10 px-3 py-1.5 rounded transition-all border border-red-400/20"
                    >
                      Delete Company
                    </button>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
                      Case Studies ({company.CaseStudies?.length || 0})
                    </h4>
                    {company.CaseStudies && company.CaseStudies.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {company.CaseStudies.map((study: any) => (
                          <div
                            key={study.TemplateID}
                            className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-700/50 flex flex-col justify-between group"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <span className="text-sm font-bold text-blue-400 block mb-1">
                                  {study.TemplateID}
                                </span>
                                <span className="text-[10px] text-neutral-500 font-medium bg-neutral-800 px-2 py-0.5 rounded">
                                  {study.Blocks?.length || 0} Content Blocks
                                </span>
                              </div>
                              <button
                                onClick={() =>
                                  handleDeleteCaseStudy(
                                    company.CompanyID,
                                    study.TemplateID,
                                  )
                                }
                                className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                                title="Delete Case Study"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div className="flex gap-2 mt-auto">
                              <button className="flex-1 text-[10px] font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-neutral-300 py-2 rounded transition-colors border border-neutral-700">
                                Edit
                              </button>
                              <button className="flex-1 text-[10px] font-bold uppercase tracking-wider bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 py-2 rounded transition-colors border border-blue-500/20">
                                View
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6 bg-neutral-900/30 rounded-lg border border-neutral-800">
                        <p className="text-xs text-neutral-600 italic">
                          No case studies found for this company.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
