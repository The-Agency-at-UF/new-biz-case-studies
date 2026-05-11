import { gentonaMedium } from "@/app/fonts";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function OpportunitySection() {
  return (
    <CaseStudyContent>
      <div className="max-w-none flex flex-col gap-6 lg:gap-18">
        <CaseStudyHeader preTitle="The" title="Opportunity" caseStudyId="uber" />
        <CaseStudyText weight="light">
          We saw the chance to help the tech giant connect with more audiences.<br></br>
          We <span className="font-bold">forecasted trends</span>, drew out a <span className="font-bold">monthly cultural pulse</span>, and <span className="font-bold">built bold assets.</span>
        </CaseStudyText>
      </div>
    </CaseStudyContent>
  );
}
