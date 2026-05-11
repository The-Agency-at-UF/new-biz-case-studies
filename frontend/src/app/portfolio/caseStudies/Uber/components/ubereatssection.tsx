import { gentonaMedium } from "@/app/fonts";
import { CaseStudyText } from "@/components/CaseStudy";

export default function UberEatsSection() {
  return (
    <div className="relative flex flex-col h-full px-6 md:px-12 lg:px-20 inset-0 py-38">
      <div className="max-w-none flex flex-row items-center gap-6 lg:gap-18">
        <h2
          className={`${gentonaMedium.className} text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase shrink-0`}
        >
          <span className="block text-white">Uber</span>
          <span className="block text-[#76c893]">Eats</span>
        </h2>
        <CaseStudyText weight="light">
          Our team helped American and Canadian restaurants promote Uber Eats as one of their customers' dining options by creating adaptable promotional materials. These included digital templates for evergreen content as well as templates made to fit specific Uber Eats events and discounts.
        </CaseStudyText>
      </div>
    </div>
  );
}