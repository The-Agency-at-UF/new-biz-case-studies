"use client";

import { useState } from "react";

type CaseStudiesCardProps = {
  caseStudies: any[];
  companies: any[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  allTags: string[];
  selectedCaseStudyIDs: string[];
  setSelectedCaseStudyIDs: (ids: string[]) => void;
  onToggleCaseStudy?: (caseStudyID: string, isChecked: boolean) => void;
  isEditingCompany: boolean;
};

const TAG_COLORS = ["#AA9AFF", "#FF4D56", "#FFB13D", "#8B5CF6"];

const TYPE_OF_WORK_OPTIONS = [
  "Creative - Graphic Design",
  "Creative - Copywriting",
  "Development - Software",
  "Development - Website",
  "Research - Data Analysis",
  "Research - Strategy",
  "Production - Video",
  "Production - Photography",
  "Media - Digital Media",
  "Media - Brand Experience",
];

const getIndustryOptions = (allTags: string[]) =>
  allTags.filter((tag) => !TYPE_OF_WORK_OPTIONS.includes(tag));

export default function CaseStudiesCard({
  caseStudies,
  companies,
  selectedTags,
  setSelectedTags,
  allTags,
  selectedCaseStudyIDs,
  setSelectedCaseStudyIDs,
  onToggleCaseStudy,
  isEditingCompany,
}: CaseStudiesCardProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any | null>(null);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

  const industryOptions = getIndustryOptions(allTags);

  const cleanSelectedIDs = selectedCaseStudyIDs.map((id: any) =>
    typeof id === "string" ? id : id.CaseStudyID
  );

  const sortedCaseStudies = [...caseStudies].sort((a, b) => {
    const aSelected = cleanSelectedIDs.includes(a.CaseStudyID);
    const bSelected = cleanSelectedIDs.includes(b.CaseStudyID);

    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;

    return a.Name.localeCompare(b.Name);
  });

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const featuredCompanies = selectedCaseStudy
    ? companies.filter((company) =>
        (company.CaseStudies || []).some((caseStudy: any) => {
          const id =
            typeof caseStudy === "string"
              ? caseStudy
              : caseStudy.CaseStudyID;

          return id === selectedCaseStudy.CaseStudyID;
        })
      )
    : [];

  return (
    <>
      <div className="relative w-full min-h-[520px] xl:min-h-[657px] rounded-[20px] bg-[rgba(59,51,99,0.8)] backdrop-blur-md border border-white/10 shadow-lg p-4 sm:p-6 text-white customScroll">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,80,150,0.2),transparent_50%)]" />
        </div>

        {/* HEADER */}
        <div className="relative z-20 mb-4">
          <div className="text-white/90 text-xl font-semibold mb-3">
            Case Studies
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* TYPE OF WORK DROPDOWN */}
            <div className="relative w-full sm:max-w-[320px]">
              <button
                type="button"
                onClick={() => {
                  setTypeDropdownOpen(!typeDropdownOpen);
                  setIndustryDropdownOpen(false);
                }}
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
                <span>Type of Work</span>
                <span
                  className={`transition-transform ${
                    typeDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {typeDropdownOpen && (
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
                  {TYPE_OF_WORK_OPTIONS.map((tag) => {
                    const isSelected = selectedTags.includes(tag);

                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
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

            {/* INDUSTRY DROPDOWN */}
            <div className="relative w-full sm:max-w-[320px]">
              <button
                type="button"
                onClick={() => {
                  setIndustryDropdownOpen(!industryDropdownOpen);
                  setTypeDropdownOpen(false);
                }}
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
                <span>Industry</span>
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
                  {industryOptions.length > 0 ? (
                    industryOptions.map((tag) => {
                      const isSelected = selectedTags.includes(tag);

                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
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
                    })
                  ) : (
                    <p className="px-3 py-2 text-xs text-white/40">
                      No industry tags found
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ACTIVE SELECTED TAG PILLS */}
        {selectedTags.length > 0 && (
          <div className="relative z-10 flex gap-2 mb-4 flex-wrap">
            {selectedTags.map((tag, i) => (
              <span
                key={tag}
                style={{ backgroundColor: TAG_COLORS[i % TAG_COLORS.length] }}
                className="px-3 py-1 rounded-full text-xs flex items-center gap-2"
              >
                {tag}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTags(selectedTags.filter((t) => t !== tag))
                  }
                  className="hover:opacity-70"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}

        {/* LIST */}
        <div className="relative z-10 space-y-4 overflow-y-auto max-h-[480px] xl:max-h-[520px] pr-2 customScroll">
          {sortedCaseStudies.map((study) => {
            const isChecked = cleanSelectedIDs.includes(study.CaseStudyID);

            return (
              <div
                key={study.CaseStudyID + isChecked}
                onClick={() => setSelectedCaseStudy(study)}
                className={`flex items-center justify-between border border-white/10 rounded-lg px-4 py-3 transition cursor-pointer ${
                  isChecked
                    ? "bg-white/15 border-[#AA9AFF]"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  {/* CHECKBOX */}
                  <input
                    type="checkbox"
                    checked={isChecked}
                    readOnly
                    onClick={(e) => {
                      e.stopPropagation();

                      if (!isEditingCompany) return;

                      if (isChecked) {
                        setSelectedCaseStudyIDs(
                          cleanSelectedIDs.filter(
                            (id) => id !== study.CaseStudyID
                          )
                        );
                      } else {
                        setSelectedCaseStudyIDs([
                          ...cleanSelectedIDs,
                          study.CaseStudyID,
                        ]);
                      }

                      onToggleCaseStudy?.(study.CaseStudyID, !isChecked);
                    }}
                    className="accent-[#AA9AFF]"
                  />

                  <span className="text-sm font-medium tracking-wide">
                    {study.Name}
                  </span>
                </div>

                {/* TAGS */}
                <div className="flex gap-2 flex-wrap justify-end">
                  {(study.Tags || []).map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-300/30 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {caseStudies.length === 0 && (
            <div className="text-white/50 text-sm mt-4">
              No case studies match this filter
            </div>
          )}
        </div>
      </div>

      {/* CENTER CASE STUDY POPUP */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="
              relative
              w-full max-w-[620px]
              max-h-[88vh]
              overflow-y-auto
              rounded-[24px]
              bg-[#17122b]
              border border-white/10
              shadow-2xl
              p-6 sm:p-8
              text-white
              customScroll
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition text-xl"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-5 pr-8">
              <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
                Case Study
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                {selectedCaseStudy.Name}
              </h2>

              <p className="text-white/35 text-xs font-mono mt-2">
                ID: {selectedCaseStudy.CaseStudyID}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(selectedCaseStudy.Tags || []).map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-[#AA9AFF]/20 text-[#D7CEFF] border border-[#AA9AFF]/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-white/50 text-xs uppercase tracking-[0.2em]">
                Description
              </p>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {selectedCaseStudy.Description ||
                  selectedCaseStudy.description ||
                  "No description has been added for this case study yet."}
              </p>
            </div>

            {/* Featured On */}
            <div className="space-y-2 mt-6">
              <p className="text-white/50 text-xs uppercase tracking-[0.2em]">
                Featured On
              </p>

              {featuredCompanies.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {featuredCompanies.map((company) => (
                    <span
                      key={company.CompanyID}
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/75 border border-white/10"
                    >
                      {company.Name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-white/40 text-sm">
                  This case study is not currently featured on any company
                  presentations.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}