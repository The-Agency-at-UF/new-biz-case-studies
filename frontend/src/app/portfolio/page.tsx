import PortfolioGrid from "./components/PortfolioGrid";
import NavBar from "../../components/NavBar";

export default function PortfolioPage() {
  return (
    <div className="relative bg-black min-h-screen text-white pt-40 pl-12 overflow-hidden">
      {/* Navbar */}
      <NavBar />

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

        {/* Portfolio Grid */}
        <PortfolioGrid />
      </div>
    </div>
  );
}
