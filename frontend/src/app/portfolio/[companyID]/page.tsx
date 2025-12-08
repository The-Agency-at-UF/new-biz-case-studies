import PortfolioCard from "../../components/PortfolioCard";
import PortfolioBar from "../../components/PortfolioBar";

type CaseStudy = {
  CaseStudyID: string;
  Title: string;
};

type CompanyWithStudies = {
  CompanyID: string;
  Name: string;
  Industry: string;
  CaseStudies: CaseStudy[];
};

// TODO: Replace to env url when deploying
async function fetchCompany(
  companyID: string
): Promise<CompanyWithStudies | null> {
  const res = await fetch(
    `http://localhost:8080/api/companies/${companyID}/casestudies`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch company's case studies", res.statusText);
    return null;
  }

  return res.json();
}

export default async function CompanySpecificCaseStudies({params,}: {params: { companyID: string };}) {
  const { companyID } = params;
  const company = await fetchCompany(companyID);

  if (!company) {
    return (
      <div className="text-white pt-40 pl-12">
        <PortfolioBar />
        <p>Company has no case studies!</p>
      </div>
    );
  }

  return (
    <div className="relative bg-black min-h-screen text-white pt-40 pl-12 overflow-hidden">
      {/* Navbar */}
      <PortfolioBar />

      {/* Background blobs */}
      <img
        src="/Blob(1).png"
        alt=""
        className="absolute top-0 left-0 w-[600px] opacity-40 blur-lg pointer-events-none select-none"
      />
      <img
        src="/Blob(2).png"
        alt=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-40 blur-lg pointer-events-none select-none"
      />
      <img
        src="/Blob(3).png"
        alt=""
        className="absolute bottom-0 right-0 w-[800px] opacity-40 blur-lg pointer-events-none select-none"
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Company Header */}
        <div className="text-5xl text-white font-[Times_New_Roman] tracking-wide mb-4">
          {company.Name}
        </div>
        <p className="text-gray-300 text-xl leading-relaxed mb-6 max-w-3xl">
          Industry: {company.Industry}
        </p>
        <p className="text-gray-400 mb-12 max-w-3xl">
          Case studies showcasing our work with {company.Name}.
        </p>

        {/* Case study cards for this company */}
        <div className="flex flex-wrap gap-10 pb-20">
          {company.CaseStudies.map((study) => (
            <PortfolioCard
              key={study.CaseStudyID}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
