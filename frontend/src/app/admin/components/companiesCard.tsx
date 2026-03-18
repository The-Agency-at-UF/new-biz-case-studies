type CompaniesCardProps = {
  companies: any[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  allTags: string[];
};

export default function CompaniesCard({
  companies,
  selectedTag,
  setSelectedTag,
  allTags,
}: CompaniesCardProps) {
  return (
    <div
      className="
        w-[360px] h-[826px]
        rounded-[20px]
        bg-[rgba(59,51,99,0.8)]
        backdrop-blur-md
        border border-white/10
        shadow-[0_4px_4px_rgba(0,0,0,0.25)]
        p-6
        text-white
        overflow-y-auto
        customScroll
      "
    >
      {/* HEADER + FILTER */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3 text-white/70 text-sm">
          <img
            src="/assets/admin/FilterIcon.png"
            alt="filter"
            className="w-4 h-4 cursor-pointer hover:opacity-70"
          />
          <span>Industry</span>
        </div>

        {/* TAG FILTERS */}
        <div className="flex gap-2 flex-wrap">
          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;

            return (
              <button
                key={tag}
                onClick={() =>
                  setSelectedTag(isSelected ? null : tag)
                }
                className={`
                  px-3 py-1 rounded-full text-xs transition border
                  ${
                    isSelected
                      ? "bg-white text-black border-white"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }
                `}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* COMPANY LIST */}
      <div className="space-y-3">
        {companies.map((company) => (
          <div
            key={company.CompanyID}
            className="
              flex items-center justify-between
              border-b border-white/10
              pb-2
              text-sm
              text-white/80
              hover:text-white
              transition
              cursor-pointer
            "
          >
            {/* Name */}
            <span>{company.Name}</span>

            {/* Industry tag */}
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
              {company.Industry}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}