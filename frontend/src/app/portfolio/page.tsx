import PortfolioCard from "../components/PortfolioCard";
import PortfolioBar from "../components/PortfolioBar";
import Link from "next/link";

type CaseStudy = {
  CompanyID: string;
  TemplateID: string;
  Blocks: any; // array of block objects
};

type CompanyWithStudies = {
  CompanyID: string;
  Name: string;
  Industry: string;
  CaseStudies: CaseStudy[];
};

async function fetchCompanies(): Promise<CompanyWithStudies[]> {
  const res = await fetch(
    // TODO: update env to production URL when deploying
    `http://localhost:8080/api/overview`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch companies", res.statusText);
    return [];
  }

  return res.json();
}

export default async function PortfolioPage() {

  const companies = await fetchCompanies();
  const companiesWithCaseStudies = companies.filter(
    (company) => company.CaseStudies && company.CaseStudies.length > 0
  );

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
        {/* Title + Blurb */}
        <div className="text-5xl text-white font-[Times_New_Roman] tracking-wide mb-4">
          Our Portfolio
        </div>
        <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-3xl">
          A selection of case studies showcasing The Agency's expertise in delivering
          creative and technical solutions across various industries.
        </p>

        {/* Category buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button className="px-4 py-2 bg-white text-black font-bold rounded-md">
            All
          </button>
          <button className="px-4 py-2 bg-white text-black font-bold rounded-md">
            Branding
          </button>
          <button className="px-4 py-2 bg-white text-black font-bold rounded-md">
            Web Design
          </button>
          <button className="px-4 py-2 bg-white text-black font-bold rounded-md">
            Marketing
          </button>
          <button className="px-4 py-2 bg-white text-black font-bold rounded-md">
            Development
          </button>
        </div>

        {/* Portfolio cards */}
        <div className="flex flex-wrap gap-10 pb-20">
          {companiesWithCaseStudies.map((company) =>
            <Link href={`/portfolio/${company.CompanyID}`} key={company.CompanyID}>
              <PortfolioCard
                key={company.CompanyID}
                projectTitle={company.Name}
                industry={company.Industry}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
