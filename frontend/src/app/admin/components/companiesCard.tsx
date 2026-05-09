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

  onUpdateCompany: (
    companyID: string,
    updatedData: { Name: string; Industry: string; CaseStudies: string[] }
  ) => Promise<void>;
  onDeleteCompany: (companyID: string) => Promise<void>;
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
  onUpdateCompany,
  onDeleteCompany,
}: CompaniesCardProps) {
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const [copiedCompanyID, setCopiedCompanyID] = useState<string | null>(null);
  const [bulkAddedCompanyID, setBulkAddedCompanyID] = useState<string | null>(
    null
  );

  const [openMenuCompanyID, setOpenMenuCompanyID] = useState<string | null>(
    null
  );
  const [editingCompany, setEditingCompany] = useState<any | null>(null);
  const [editName, setEditName] = useState("");
  const [editIndustry, setEditIndustry] = useState("");
  const [editIndustryDropdownOpen, setEditIndustryDropdownOpen] =
    useState(false);
  const [savingEdit, setSavingEdit] = useState(false);

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

    setBulkAddedCompanyID(company.CompanyID);

    try {
      await onBulkAddToCompany(company);

      setTimeout(() => {
        setBulkAddedCompanyID(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to bulk add case studies:", error);
      setBulkAddedCompanyID(null);
      alert("Failed to add selected case studies.");
    }
  };

  const getCompanyCaseStudyIDs = (company: any) => {
    return (company.CaseStudies || []).map((cs: any) =>
      typeof cs === "string" ? cs : cs.CaseStudyID
    );
  };

  const openEditModal = (
    e: React.MouseEvent<HTMLButtonElement>,
    company: any
  ) => {
    e.stopPropagation();
    setOpenMenuCompanyID(null);
    setEditingCompany(company);
    setEditName(company.Name || "");
    setEditIndustry(company.Industry || "");
  };

  const closeEditModal = () => {
    setEditingCompany(null);
    setEditName("");
    setEditIndustry("");
    setEditIndustryDropdownOpen(false);
    setSavingEdit(false);
  };

  const handleSubmitEdit = async () => {
    if (!editingCompany) return;
    if (!editName.trim() || !editIndustry.trim()) return;

    setSavingEdit(true);

    await onUpdateCompany(editingCompany.CompanyID, {
      Name: editName.trim(),
      Industry: editIndustry.trim(),
      CaseStudies: getCompanyCaseStudyIDs(editingCompany),
    });

    closeEditModal();
  };

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    company: any
  ) => {
    e.stopPropagation();
    setOpenMenuCompanyID(null);
    await onDeleteCompany(company.CompanyID);
  };

  return (
    <>
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
            const isMenuOpen = openMenuCompanyID === company.CompanyID;

            return (
              <div
                key={company.CompanyID}
                onClick={() => onCompanyClick(company)}
                className={`
                  relative
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
                      ${isActive ? "bg-[#AA9AFF] text-white" : "bg-white/10"}
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
                          : wasBulkAdded
                          ? "Added!"
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
                        <span className="text-sm">✓</span>
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

                  {/* Three-dot menu */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuCompanyID(
                        isMenuOpen ? null : company.CompanyID
                      );
                    }}
                    title="Company actions"
                    className="
                      w-7 h-7
                      flex items-center justify-center
                      text-white
                      hover:opacity-70
                      transition
                      shrink-0
                    "
                  >
                    ⋯
                  </button>

                  {isMenuOpen && (
                    <div
                      className="
                        absolute
                        right-0
                        top-[calc(100%+6px)]
                        z-50
                        w-[160px]
                        rounded-xl
                        bg-[#17122b]
                        border border-white/10
                        shadow-2xl
                        p-2
                      "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={(e) => openEditModal(e, company)}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs text-white/75 hover:text-white hover:bg-white/10 transition"
                      >
                        Edit Company
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleDelete(e, company)}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs text-red-300 hover:text-red-200 hover:bg-red-500/10 transition"
                      >
                        Delete Company
                      </button>
                    </div>
                  )}
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

      {/* EDIT COMPANY MODAL */}
      {editingCompany && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={closeEditModal}
        >
          <div
            className="
              relative
              w-full max-w-[560px]
              rounded-[24px]
              bg-[#17122b]
              border border-white/10
              shadow-2xl
              text-white
              overflow-visible
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/10">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
                  Edit Company
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  {editingCompany.Name}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeEditModal}
                className="text-white/40 hover:text-white transition text-xl"
              >
                ✕
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6 space-y-6">
              <div className="space-y-2">
                <label className="text-white/50 text-xs tracking-widest uppercase">
                  Company Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#AA9AFF] transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/50 text-xs tracking-widest uppercase">
                  Industry
                </label>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setEditIndustryDropdownOpen(!editIndustryDropdownOpen)
                    }
                    className="
                      w-full
                      flex items-center justify-between
                      rounded-lg
                      bg-white/5
                      border border-white/10
                      px-4 py-3
                      text-sm
                      text-white
                      hover:border-white/20
                      transition
                    "
                  >
                    <span
                      className={editIndustry ? "text-white" : "text-white/30"}
                    >
                      {editIndustry || "Choose one industry"}
                    </span>

                    <span
                      className={`transition-transform ${
                        editIndustryDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {editIndustryDropdownOpen && (
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
                        z-50
                        max-h-[220px]
                        overflow-y-auto
                        customScroll
                      "
                    >
                      {allTags.map((tag) => {
                        const isSelected = editIndustry === tag;

                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => {
                              setEditIndustry(tag);
                              setEditIndustryDropdownOpen(false);
                            }}
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
                                <span className="text-white text-[10px]">
                                  ✓
                                </span>
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
            </div>

            <div className="px-6 sm:px-8 py-6 border-t border-white/10 flex gap-3">
              <button
                type="button"
                onClick={closeEditModal}
                className="w-full py-3 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSubmitEdit}
                disabled={!editName.trim() || !editIndustry.trim() || savingEdit}
                className="w-full py-3 rounded-lg bg-[#AA9AFF] hover:bg-[#9B8AFF] disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-medium transition"
              >
                {savingEdit ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}