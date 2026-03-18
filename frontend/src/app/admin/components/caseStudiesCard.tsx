type CaseStudiesCardProps = {
  caseStudies: any[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  allTags: string[];
};

const TAG_COLORS = ["#AA9AFF", "#FF4D56", "#FFB13D", "#8B5CF6"];

export default function CaseStudiesCard({
  caseStudies,
  selectedTags,
  setSelectedTags,
  allTags,
}: CaseStudiesCardProps) {
  return (
    <div
      className="
        relative
        w-[675px] h-[657px]
        rounded-[20px]
        bg-[rgba(59,51,99,0.8)]
        backdrop-blur-md
        border border-white/10
        shadow-lg
        p-6
        text-white
        customScroll
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,80,150,0.2),transparent_50%)]" />
      </div>

      {/* FILTER HEADER */}
      <div className="relative z-10 mb-4">
        <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
          <img
            src="/assets/admin/FilterIcon.png"
            alt="filter"
            className="w-4 h-4 cursor-pointer hover:opacity-70"
          />
          <span>Tags</span>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex gap-2 flex-wrap">
          {allTags.map((tag) => {
            const index = selectedTags.indexOf(tag);
            const isSelected = index !== -1;
            const color = TAG_COLORS[index % TAG_COLORS.length];

            return (
              <button
                key={tag}
                onClick={() => {
                  if (isSelected) {
                    setSelectedTags(selectedTags.filter(t => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
                style={
                  isSelected
                    ? {
                        backgroundColor: color,
                        borderColor: color,
                        color: "white",
                      }
                    : {}
                }
                className={`
                  px-3 py-1 rounded-full text-xs transition border
                  ${
                    isSelected
                      ? ""
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

      {/* ACTIVE TAG PILLS */}
      {selectedTags.length > 0 && (
        <div className="relative z-10 flex gap-2 mb-4 flex-wrap">
          {selectedTags.map((tag, i) => {
            const color = TAG_COLORS[i % TAG_COLORS.length];

            return (
              <span
                key={tag}
                style={{ backgroundColor: color }}
                className="px-3 py-1 rounded-full text-xs flex items-center gap-2"
              >
                {tag}
                <button
                  onClick={() =>
                    setSelectedTags(selectedTags.filter(t => t !== tag))
                  }
                  className="hover:text-red-200"
                >
                  ✕
                </button>
              </span>
            );
          })}
        </div>
      )}

      {/* LIST */}
      <div className="relative z-10 space-y-4 overflow-y-auto h-[480px] pr-2">
        {caseStudies.map((study) => (
          <div
            key={study.CaseStudyID}
            className="
              flex items-center justify-between
              bg-white/5
              border border-white/10
              rounded-lg
              px-4 py-3
              hover:bg-white/10
              transition
            "
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <input type="checkbox" className="accent-[#AA9AFF]" />
              <span className="text-sm font-medium tracking-wide">
                {study.Name}
              </span>
            </div>

            {/* RIGHT TAGS (UNCHANGED STYLE) */}
            <div className="flex gap-2 flex-wrap">
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
        ))}

        {/* EMPTY STATE */}
        {caseStudies.length === 0 && (
          <div className="text-white/50 text-sm mt-4">
            No case studies match this filter
          </div>
        )}
      </div>
    </div>
  );
}