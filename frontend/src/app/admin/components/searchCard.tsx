type SearchCardProps = {
  search: string;
  setSearch: (value: string) => void;
  companyCount: number;
  caseStudyCount: number;
};

export default function SearchCard({
  search,
  setSearch,
  companyCount,
  caseStudyCount,
}: SearchCardProps) {
  return (
    <div
      className="
        relative
        w-full min-h-[237px]
        rounded-[20px]
        bg-[rgba(59,51,99,0.8)]
        backdrop-blur-md
        border border-white/10
        shadow-lg
        px-6 py-6
        text-white
      "
    >
      {/* Glow (optional but nice) */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,80,150,0.2),transparent_50%)]" />
      </div>

      {/* Stats */}
      <div className="relative z-10 space-y-2">
        <p className="text-xl font-semibold text-white/90">
          Case Studies: {caseStudyCount}
        </p>
        <p className="text-xl font-semibold text-white/90">
          Companies: {companyCount}
        </p>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="relative">
          <input
            type="text"
            placeholder=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-[#E5E5E5]
              text-black
              rounded-full
              px-5 py-3
              text-sm
              outline-none
            "
          />

          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}