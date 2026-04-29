"use client";

import { useState, useEffect } from "react";
import { insertCompany, fetchCaseStudies } from "../backend/backend";

const toSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

type AddCompanyButtonProps = {
  onCompanyAdded?: () => void;
};

export default function AddCompanyButton({ onCompanyAdded }: AddCompanyButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [allCaseStudies, setAllCaseStudies] = useState<any[]>([]);
  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);
  const [generatedURL, setGeneratedURL] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      fetchCaseStudies().then(setAllCaseStudies);
    }
  }, [open]);

  const slug = toSlug(name);

  const toggleStudy = (id: string) => {
    setSelectedIDs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

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

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={handleClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-[480px] z-50
          bg-[#0f0d1a] border-l border-white/10
          shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <span className="text-white/40 text-xs tracking-widest uppercase">New Company</span>
          <button
            onClick={handleClose}
            className="text-white/30 hover:text-white transition text-lg"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 customScroll">

          {/* Company Name */}
          <div className="space-y-2">
            <label className="text-white/50 text-xs tracking-widest uppercase">Company Name</label>
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

          {/* Industry */}
          <div className="space-y-2">
            <label className="text-white/50 text-xs tracking-widest uppercase">Industry</label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g. Beverage & CPG"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#AA9AFF] transition placeholder:text-white/20"
            />
          </div>

          {/* Case Studies */}
          <div className="space-y-3">
            <label className="text-white/50 text-xs tracking-widest uppercase">Case Studies</label>
            <div className="space-y-2">
              {allCaseStudies.map((study) => {
                const isSelected = selectedIDs.includes(study.CaseStudyID);
                return (
                  <div
                    key={study.CaseStudyID}
                    onClick={() => toggleStudy(study.CaseStudyID)}
                    className={`
                      flex items-center justify-between
                      px-4 py-3 rounded-lg border cursor-pointer transition
                      ${isSelected
                        ? "bg-[#AA9AFF]/10 border-[#AA9AFF]/40 text-white"
                        : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition ${isSelected ? "bg-[#AA9AFF] border-[#AA9AFF]" : "border-white/20"}`}>
                        {isSelected && <span className="text-white text-[10px]">✓</span>}
                      </div>
                      <span className="text-sm">{study.Name}</span>
                    </div>
                    <div className="flex gap-1 flex-wrap justify-end max-w-[160px]">
                      {(study.Tags || []).slice(0, 2).map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="px-8 py-6 border-t border-white/10 space-y-3">
          {generatedURL ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                <span className="text-[#AA9AFF] text-xs font-mono flex-1 truncate">{generatedURL}</span>
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
    </>
  );
}