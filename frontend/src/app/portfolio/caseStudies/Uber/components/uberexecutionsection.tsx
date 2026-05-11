import { gentonaMedium } from "@/app/fonts";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function UberExecutionSection() {
  return (
    <CaseStudyContent className="bg-[#142328]">
      <div className="max-w-none flex flex-col gap-12">
        <CaseStudyHeader preTitle="The" title="Solution" caseStudyId="uber" />

        <div className="flex flex-col gap-6">
          <CaseStudyText weight="light">
            We collaborated with Uber&apos;s global marketing and creative teams on
            the ideation and execution of a number of creative briefs. These
            included copy for collaborations and brand activations, including{" "}
            <strong className="font-black">Uber x Yankees, Uber x Walgreens</strong>{" "}
            and <strong className="font-black">Uber&apos;s Go Get Event</strong>.
            With the Uber team, our data analysts moderated interviews and
            developed scripts for surveys, both of which generated insights on
            user experience.
          </CaseStudyText>
          <CaseStudyText weight="light">
            Each month, we presented actionable recommendations for Uber. We
            conducted an audit of Uber&apos;s current standing with social channels,
            gaming and loyalty programs to suggest new ways the technology
            company could{" "}
            <strong className="font-black">
              maximize brand affinity among Gen Z and younger millennials
            </strong>
            .
          </CaseStudyText>
          <CaseStudyText weight="light">
            We showed Uber&apos;s teams which kinds of messaging maintain customer
            loyalty in a general market and which emerging channels would be
            most advantageous to use when targeting Gen Z.
          </CaseStudyText>
        </div>
      </div>
    </CaseStudyContent>
  );
}

