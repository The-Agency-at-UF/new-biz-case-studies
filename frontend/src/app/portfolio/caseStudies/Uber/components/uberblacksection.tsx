import { gentonaMedium } from "@/app/fonts";
import { CaseStudyText } from "@/components/CaseStudy";

export default function UberBlackSection() {
  return (
    <div className="relative flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 py-24 pb-48">
      <div className="max-w-none flex flex-row items-start items-center gap-6 lg:gap-18">
        <h2
          className={`${gentonaMedium.className} text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.8] tracking-normal`}
        >
          <span className="block text-white">Uber</span>
          <span className="block text-[#76c893]">Black</span>
        </h2>
        <CaseStudyText weight="light">
          We created new and improved car labels for Uber Black, which are being{" "}
          <span className="font-bold">displayed overseas.</span>
        </CaseStudyText>
      </div>
    </div>
  );
}