type CaseStudiesCardProps = {
  companies: any[];
};

export default function CaseStudiesCard({ companies }: CaseStudiesCardProps) {
  const allStudies = companies.flatMap((company) =>
    (company.CaseStudies || []).map((study: any) => ({
      ...study,
      companyName: company.Name,
    }))
  );

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
      "
    >
      {/* Glow layer (optional) */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,80,150,0.2),transparent_50%)]" />
      </div>

      {/* TAGS */}
      <div className="relative z-10 flex gap-2 mb-6">
        <span className="px-3 py-1 rounded-full bg-purple-400 text-xs">Tag</span>
        <span className="px-3 py-1 rounded-full bg-pink-400 text-xs">Tag</span>
        <span className="px-3 py-1 rounded-full bg-orange-400 text-xs">Tag</span>
      </div>

      {/* LIST */}
      <div className="relative z-10 space-y-4 overflow-y-auto h-[520px] pr-2">
        {allStudies.map((study, index) => (
          <div
            key={index}
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
                {study.companyName}
              </span>
            </div>

            {/* Right */}
            <span className="text-xs bg-purple-300/30 px-3 py-1 rounded-full">
              Tag
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}