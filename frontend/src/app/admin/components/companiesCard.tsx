"use client";

import { useState } from "react";

type CompaniesCardProps = {
  companies: any[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  allTags: string[];
  onCompanyClick: (company: any) => void;
  selectedCompanyForEdit: any | null;

  bulkMode: boolean;
  bulkSelectedCount: number;
  onBulkAddToCompany: (company: any) => Promise<void>;
};

export default function CompaniesCard({
  companies,
  selectedTag,
  setSelectedTag,
  allTags,
  onCompanyClick,
  selectedCompanyForEdit,
  bulkMode,
  bulkSelectedCount,
  onBulkAddToCompany,
}: CompaniesCardProps) {
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const [copiedCompanyID, setCopiedCompanyID] = useState<string | null>(null);
  const [bulkAddedCompanyID, setBulkAddedCompanyID] = useState<string | null>(null);

  const handleSelectIndustry = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }

    setIndustryDropdownOpen(false);
  };

  const handleCopyCompanyLink = async (
    e: React.MouseEvent<HTMLButtonElement>,
    companyID: string
  ) => {
    e.stopPropagation();

    const companyURL = `${window.location.origin}/${companyID}`;

    try {
      await navigator.clipboard.writeText(companyURL);
      setCopiedCompanyID(companyID);

      setTimeout(() => {
        setCopiedCompanyID(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy company link:", error);
      alert("Failed to copy link.");
    }
  };

  const handleBulkAdd = async (
    e: React.MouseEvent<HTMLButtonElement>,
    company: any
  ) => {
    e.stopPropagation();

    if (bulkSelectedCount === 0) return;

    await onBulkAddToCompany(company);

    setBulkAddedCompanyID(company.CompanyID);

    setTimeout(() => {
      setBulkAddedCompanyID(null);
    }, 1500);
  };

  return (
    <div
      className="
        w-full xl:w-[360px] min-h-[520px] xl:min-h-[826px] max-h-[826px]
        rounded-[20px]
        bg-[rgba(59,51,99,0.8)]
        backdrop-blur-md
        border border-white/10
        shadow-[0_4px_4px_rgba(0,0,0,0.25)]
        p-4 sm:p-6
        text-white
        overflow-y-auto
        customScroll
      "
    >
      {/* HEADER + DROPDOWN */}
      <div className="mb-4">
        <div className="text-white/90 text-xl font-semibold mb-3">
          Companies
        </div>

        {bulkMode && (
          <div className="mb-3 rounded-xl border border-[#AA9AFF]/30 bg-[#AA9AFF]/10 px-3 py-2">
            <p className="text-xs text-white/80">
              Bulk Add Mode: click + to add {bulkSelectedCount} selected case
              {bulkSelectedCount === 1 ? " study" : " studies"}.
            </p>
          </div>
        )}

        {/* INDUSTRY DROPDOWN */}
        <div className="relative w-full">
          <button
            type="button"
            onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
            className="
              w-full
              flex items-center justify-between
              rounded-full
              bg-white/10
              border border-white/20
              px-4 py-2
              text-sm
              text-white
              hover:bg-white/15
              transition
            "
          >
            <span>{selectedTag || "Industry"}</span>
            <span
              className={`transition-transform ${
                industryDropdownOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {industryDropdownOpen && (
            <div
              className="
                absolute left-0 top-[calc(100%+8px)]
                w-full
                rounded-2xl
                bg-[#17122b]
                border border-white/10
                shadow-2xl
                p-3
                space-y-1
                z-30
                max-h-[280px]
                overflow-y-auto
                customScroll
              "
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedTag(null);
                  setIndustryDropdownOpen(false);
                }}
                className={`
                  w-full
                  flex items-center gap-3
                  rounded-lg
                  px-3 py-2
                  text-left text-xs
                  transition
                  ${
                    selectedTag === null
                      ? "bg-[#AA9AFF]/20 text-white"
                      : "text-white/65 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span
                  className={`
                    w-4 h-4
                    rounded
                    border
                    flex items-center justify-center
                    shrink-0
                    ${
                      selectedTag === null
                        ? "bg-[#AA9AFF] border-[#AA9AFF]"
                        : "border-white/30"
                    }
                  `}
                >
                  {selectedTag === null && (
                    <span className="text-white text-[10px]">✓</span>
                  )}
                </span>

                <span>All Industries</span>
              </button>

              {allTags.map((tag) => {
                const isSelected = selectedTag === tag;

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleSelectIndustry(tag)}
                    className={`
                      w-full
                      flex items-center gap-3
                      rounded-lg
                      px-3 py-2
                      text-left text-xs
                      transition
                      ${
                        isSelected
                          ? "bg-[#AA9AFF]/20 text-white"
                          : "text-white/65 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    <span
                      className={`
                        w-4 h-4
                        rounded
                        border
                        flex items-center justify-center
                        shrink-0
                        ${
                          isSelected
                            ? "bg-[#AA9AFF] border-[#AA9AFF]"
                            : "border-white/30"
                        }
                      `}
                    >
                      {isSelected && (
                        <span className="text-white text-[10px]">✓</span>
                      )}
                    </span>

                    <span>{tag}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* COMPANY LIST */}
      <div className="space-y-3">
        {companies.map((company) => {
          const isActive =
            selectedCompanyForEdit?.CompanyID === company.CompanyID;

          const wasCopied = copiedCompanyID === company.CompanyID;
          const wasBulkAdded = bulkAddedCompanyID === company.CompanyID;

          return (
            <div
              key={company.CompanyID}
              onClick={() => onCompanyClick(company)}
              className={`
                flex items-center justify-between gap-3
                border-b border-white/10
                pb-2
                text-sm
                transition
                cursor-pointer

                ${
                  isActive
                    ? "text-white bg-white/10 rounded px-2 py-1"
                    : "text-white/80 hover:text-white"
                }
              `}
            >
              {/* Left side */}
              <div className="min-w-0 flex-1">
                <span className="block truncate">{company.Name}</span>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`
                    text-xs px-2 py-1 rounded-full max-w-[120px] truncate
                    ${
                      isActive
                        ? "bg-[#AA9AFF] text-white"
                        : "bg-white/10"
                    }
                  `}
                >
                  {company.Industry}
                </span>

                {bulkMode && (
                  <button
                    type="button"
                    onClick={(e) => handleBulkAdd(e, company)}
                    disabled={bulkSelectedCount === 0}
                    title={
                      bulkSelectedCount === 0
                        ? "Select case studies first"
                        : "Add selected case studies"
                    }
                    className="
                      w-7 h-7
                      flex items-center justify-center
                      text-white
                      hover:opacity-70
                      transition
                      shrink-0
                      disabled:opacity-25
                      disabled:cursor-not-allowed
                    "
                  >
                    {wasBulkAdded ? (
                      <span className="text-xs">✓</span>
                    ) : (
                      <span className="text-lg leading-none">+</span>
                    )}
                  </button>
                )}

                <button
                  type="button"
                  onClick={(e) =>
                    handleCopyCompanyLink(e, company.CompanyID)
                  }
                  title={wasCopied ? "Copied!" : "Copy company link"}
                  className="
                    w-7 h-7
                    flex items-center justify-center
                    text-white
                    hover:opacity-70
                    transition
                    shrink-0
                  "
                >
                  {wasCopied ? (
                    <span className="text-xs">✓</span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          );
        })}

        {companies.length === 0 && (
          <div className="text-white/50 text-sm mt-4">
            No companies match this filter
          </div>
        )}
      </div>
    </div>
  );
}