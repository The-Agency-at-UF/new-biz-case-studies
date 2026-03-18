type CompaniesCardProps = {
  companies: any[];
};

export default function CompaniesCard({ companies }: CompaniesCardProps) {
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
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-white/70">⚲</span>
        <span className="text-sm">Tag</span>
        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">Tag</span>
      </div>

      {/* Company list */}
      <div className="space-y-3">
        {companies.map((company) => (
          <div
            key={company.CompanyID}
            className="
              border-b border-white/10
              pb-2
              text-sm
              hover:text-white
              text-white/80
              cursor-pointer
            "
          >
            {company.Name}
          </div>
        ))}
      </div>
    </div>
  );
}