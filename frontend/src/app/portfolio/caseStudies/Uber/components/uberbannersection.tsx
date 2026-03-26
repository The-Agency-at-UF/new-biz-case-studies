import { gentonaMedium } from "@/app/fonts";

export default function UberBannerSection() {
  return (
    <div className="relative flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 pb-38 bg-[#142328]">
      <div className="flex flex-row gap-4 items-stretch">
        <img
          src="/assets/Uber/Uber_Banner1.png"
          alt="Uber Eats banner 1"
          className="flex-1 min-w-0 h-auto object-cover"
        />
        <img
          src="/assets/Uber/Uber_Banner2.png"
          alt="Uber Eats banner 2"
          className="flex-1 min-w-0 h-auto object-cover"
        />
        <img
          src="/assets/Uber/Uber_Banner3.png"
          alt="Uber Eats banner 3"
          className="flex-1 min-w-0 h-auto object-cover"
        />
      </div>
    </div>
  );
}