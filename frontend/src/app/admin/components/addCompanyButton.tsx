"use client";

import { useState, useEffect } from "react";
import { insertCompany, fetchCaseStudies } from "../backend/backend";

const toSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

type AddCompanyButtonProps = {
  onCompanyAdded?: () => void;
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
  allTags.filter((tag) => !TYPE_OF_WORK_OPTIONS.includes(tag)).sort();

export default function AddCompanyButton({
  onCompanyAdded,
}: AddCompanyButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const [industry, setIndustry] = useState("");
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

  const [allCaseStudies, setAllCaseStudies] = useState<any[]>([]);
  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);
  const [caseStudySearch, setCaseStudySearch] = useState("");

  const [selectedCaseStudyFilters, setSelectedCaseStudyFilters] = useState<
    string[]
  >([]);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [caseStudyIndustryDropdownOpen, setCaseStudyIndustryDropdownOpen] =
    useState(false);

  const [generatedURL, setGeneratedURL] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      fetchCaseStudies().then(setAllCaseStudies);
    }
  }, [open]);

  const slug = toSlug(name);

  const allTags = Array.from(
    new Set(allCaseStudies.flatMap((study) => study.Tags || []))
  );

  const industryOptions = getIndustryOptions(allTags);

  const selectedCaseStudies = allCaseStudies.filter((study) =>
    selectedIDs.includes(study.CaseStudyID)
  );

  const toggleStudy = (id: string) => {
    setSelectedIDs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleCaseStudyFilter = (tag: string) => {
    if (selectedCaseStudyFilters.includes(tag)) {
      setSelectedCaseStudyFilters(
        selectedCaseStudyFilters.filter((t) => t !== tag)
      );
    } else {
      setSelectedCaseStudyFilters([...selectedCaseStudyFilters, tag]);
    }
  };

  const filteredCaseStudies = allCaseStudies
    .filter((study) =>
      study.Name.toLowerCase().includes(caseStudySearch.toLowerCase())
    )
    .filter((study) =>
      selectedCaseStudyFilters.length === 0
        ? true
        : selectedCaseStudyFilters.every((tag) => study.Tags?.includes(tag))
    )
    .sort((a, b) => {
      const aSelected = selectedIDs.includes(a.CaseStudyID);
      const bSelected = selectedIDs.includes(b.CaseStudyID);

      if (aSelected && !bSelected) return -1;
      if (!aSelected && bSelected) return 1;

      return a.Name.localeCompare(b.Name);
    });

  const handleSubmit = async () => {
    if (!name.trim() || !industry.trim()) return;

    setSaving(true);

    try {
      await insertCompany({
        CompanyID: slug,
        Name: name,
        Industry: industry,
        CaseStudies: selectedIDs,
      });

      const url = `${window.location.origin}/${slug}`;
      setGeneratedURL(url);
      onCompanyAdded?.();
    } catch (err) {
      console.error("Failed to insert company:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleCopy = () => {
    if (!generatedURL) return;

    navigator.clipboard.writeText(generatedURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setIndustry("");
    setSelectedIDs([]);
    setCaseStudySearch("");
    setSelectedCaseStudyFilters([]);
    setIndustryDropdownOpen(false);
    setTypeDropdownOpen(false);
    setCaseStudyIndustryDropdownOpen(false);
    setGeneratedURL(null);
    setCopied(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full xl:w-[360px] rounded-full bg-[rgba(83,1,215,0.5)] text-white py-3 font-medium backdrop-blur-md border border-white/10 hover:bg-[rgba(83,1,215,0.7)] transition shadow-md"
      >
        + Add Company
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <div
            className="
              relative
              w-full max-w-[720px]
              max-h-[88vh]
              rounded-[24px]
              bg-[#17122b]
              border border-white/10
              shadow-2xl
              text-white
              overflow-hidden
              flex flex-col
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/10">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
                  New Company
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Add Company
                </h2>
              </div>

              <button
                onClick={handleClose}
                className="text-white/40 hover:text-white transition text-xl"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-8 customScroll">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-white/50 text-xs tracking-widest uppercase">
                  Company Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Coca Cola"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#AA9AFF] transition placeholder:text-white/20"
                />

                {name && (
                  <p className="text-white/30 text-xs font-mono">
                    slug: <span className="text-[#AA9AFF]">{slug}</span>
                  </p>
                )}
              </div>

              {/* Company Industry */}
              <div className="space-y-3">
                <label className="text-white/50 text-xs tracking-widest uppercase">
                  Company Industry
                </label>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setIndustryDropdownOpen(!industryDropdownOpen)
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
                      className={industry ? "text-white" : "text-white/30"}
                    >
                      {industry || "Choose one industry"}
                    </span>

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
                        z-50
                        max-h-[240px]
                        overflow-y-auto
                        customScroll
                      "
                    >
                      {industryOptions.length > 0 ? (
                        industryOptions.map((option) => {
                          const isSelected = industry === option;

                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setIndustry(option);
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

                              <span>{option}</span>
                            </button>
                          );
                        })
                      ) : (
                        <p className="px-3 py-2 text-xs text-white/40">
                          No industry options found.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Case Studies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-white/50 text-xs tracking-widest uppercase">
                    Case Studies
                  </label>

                  <span className="text-white/35 text-xs">
                    {selectedIDs.length} selected
                  </span>
                </div>

                {/* Selected Case Study Chips */}
                {selectedCaseStudies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudies.map((study) => (
                      <span
                        key={study.CaseStudyID}
                        className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70 flex items-center gap-2"
                      >
                        {study.Name}
                        <button
                          type="button"
                          onClick={() => toggleStudy(study.CaseStudyID)}
                          className="hover:text-white"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Search Case Studies */}
                <input
                  type="text"
                  value={caseStudySearch}
                  onChange={(e) => setCaseStudySearch(e.target.value)}
                  placeholder="Search case studies..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#AA9AFF] transition placeholder:text-white/20"
                />

                {/* Case Study Filter Dropdowns */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Type of Work Filter */}
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => {
                        setTypeDropdownOpen(!typeDropdownOpen);
                        setCaseStudyIndustryDropdownOpen(false);
                      }}
                      className="
                        w-full
                        flex items-center justify-between
                        rounded-full
                        bg-white/5
                        border border-white/20
                        px-4 py-2
                        text-sm
                        text-white/60
                        hover:bg-white/10
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
                          z-40
                          max-h-[240px]
                          overflow-y-auto
                          customScroll
                        "
                      >
                        {TYPE_OF_WORK_OPTIONS.map((tag) => {
                          const isSelected =
                            selectedCaseStudyFilters.includes(tag);

                          return (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => toggleCaseStudyFilter(tag)}
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

                  {/* Industry Filter */}
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => {
                        setCaseStudyIndustryDropdownOpen(
                          !caseStudyIndustryDropdownOpen
                        );
                        setTypeDropdownOpen(false);
                      }}
                        className="
                        w-full
                        flex items-center justify-between
                        rounded-full
                        bg-white/5
                        border border-white/20
                        px-4 py-2
                        text-sm
                        text-white/60
                        hover:bg-white/10
                        transition
                      "
                    >
                      <span>Industry</span>
                      <span
                        className={`transition-transform ${
                          caseStudyIndustryDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {caseStudyIndustryDropdownOpen && (
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
                          z-40
                          max-h-[240px]
                          overflow-y-auto
                          customScroll
                        "
                      >
                        {industryOptions.length > 0 ? (
                          industryOptions.map((tag) => {
                            const isSelected =
                              selectedCaseStudyFilters.includes(tag);

                            return (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => toggleCaseStudyFilter(tag)}
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
                          })
                        ) : (
                          <p className="px-3 py-2 text-xs text-white/40">
                            No industry tags found.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Active Case Study Filter Pills */}
                {selectedCaseStudyFilters.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudyFilters.map((tag, i) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: TAG_COLORS[i % TAG_COLORS.length],
                        }}
                        className="px-3 py-1 rounded-full text-xs flex items-center gap-2"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => toggleCaseStudyFilter(tag)}
                          className="hover:opacity-70"
                        >
                          ✕
                        </button>
                      </span>
                    ))}

                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudyFilters([])}
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/60 hover:text-white transition"
                    >
                      Clear filters
                    </button>
                  </div>
                )}

                {/* Case Study List */}
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 customScroll">
                  {filteredCaseStudies.map((study) => {
                    const isSelected = selectedIDs.includes(study.CaseStudyID);

                    return (
                      <div
                        key={study.CaseStudyID}
                        onClick={() => toggleStudy(study.CaseStudyID)}
                        className={`
                          flex items-start justify-between gap-4
                          px-4 py-3 rounded-lg border cursor-pointer transition
                          ${
                            isSelected
                              ? "bg-[#AA9AFF]/10 border-[#AA9AFF]/40 text-white"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                          }
                        `}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div
                            className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition shrink-0 ${
                              isSelected
                                ? "bg-[#AA9AFF] border-[#AA9AFF]"
                                : "border-white/20"
                            }`}
                          >
                            {isSelected && (
                              <span className="text-white text-[10px]">✓</span>
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-medium">{study.Name}</p>

                            <p className="text-xs text-white/35 mt-1 line-clamp-2">
                              {study.Description ||
                                study.description ||
                                "No description yet."}
                            </p>
                          </div>
                        </div>

                        <div className="hidden sm:flex gap-1 flex-wrap justify-end max-w-[220px] shrink-0">
                          {(study.Tags || [])
                            .slice(0, 2)
                            .map((tag: string, i: number) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      </div>
                    );
                  })}

                  {filteredCaseStudies.length === 0 && (
                    <p className="text-white/40 text-sm">
                      No case studies match your search or filters.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-6 border-t border-white/10 space-y-3">
              {generatedURL ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                    <span className="text-[#AA9AFF] text-xs font-mono flex-1 truncate">
                      {generatedURL}
                    </span>

                    <button
                      onClick={handleCopy}
                      className="text-xs text-white/50 hover:text-white transition shrink-0"
                    >
                      {copied ? "✓ Copied" : "Copy"}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onCompanyAdded?.();
                      handleClose();
                    }}
                    className="w-full py-3 rounded-lg border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!name.trim() || !industry.trim() || saving}
                  className="w-full py-3 rounded-lg bg-[#AA9AFF] hover:bg-[#9B8AFF] disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-medium transition"
                >
                  {saving ? "Creating..." : "Create & Generate Link"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}