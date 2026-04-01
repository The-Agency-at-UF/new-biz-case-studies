import NavBar from "../../../../components/NavBar";
import SeagramsHero from "./components/hero";
import OpportunitySection from "./components/opportunity";

export default function SeagramsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-foreground">
      <NavBar />
      <div className="relative w-full bg-black">
        {/* overflow-hidden + scale + translate (lg+ only): object-position alone is often invisible with object-cover on wide viewports */}
        <div className="absolute inset-0 z-0 min-h-full overflow-hidden">
          <div className="absolute inset-0 min-h-full w-full max-lg:origin-center max-lg:scale-100 origin-top lg:-top-[3%] lg:min-h-[103%] lg:translate-y-[1%] xl:translate-y-[1.5%] 2xl:translate-y-[2%]">
            <img
              src="/assets/Seagrams/seagramsbg.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[center_36%] md:object-[center_34%] lg:object-[2%_35%] lg:origin-top lg:scale-[1.02]"
            />
            {/* Lighter overlay on narrow viewports so the cans/readable product stay visible */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[1] min-h-full lg:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(200, 215, 160, 0.14) 0%, rgba(0, 0, 0, 0.2) 35%, rgba(0, 0, 0, 0.55) 65%, rgb(0, 0, 0) 88%, rgb(0, 0, 0) 100%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[1] hidden min-h-full lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(200, 215, 160, 0.2) 0%, rgba(200, 215, 160, 0.08) 40%, rgba(0, 0, 0, 0.45) 58%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 100%)",
              }}
            />
          </div>
        </div>
        <div className="relative z-[2]">
          <SeagramsHero />
          <OpportunitySection />
        </div>
      </div>
    </div>
  );
}
