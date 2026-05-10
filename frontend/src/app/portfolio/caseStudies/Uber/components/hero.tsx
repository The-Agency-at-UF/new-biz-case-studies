import { CaseStudyHero } from "@/components/CaseStudy";

export default function UberHero() {
  return (
    <div className="relative">
      <img src="/assets/Uber/uberbg.png" className="w-full h-auto" />
      <div className="absolute flex flex-col h-full w-full inset-0 bg-gradient-to-t from-[#142328] from-20% via-[#000]/3 via-90% to-transparent">
        <div className="w-full px-6 md:px-12 lg:px-20 h-full z-10 flex flex-col justify-center py-10">
          <CaseStudyHero
            caseStudyId="uber"
            clientLogoSrc="/logos/Logo_Uber_White.png"
            clientLogoAlt="Uber Logo"
            subtitle="Distinguishing a local, luxury apartment complex from competitors in a saturated market"
            showCaseStudyTag={true}
          />
        </div>
      </div>
    </div>
  );
}
