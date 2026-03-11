import { gentonaMedium } from "@/app/fonts";

export default function UberEatsSection() {
  return (
    <div className="relative flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 py-38">
      <div className="max-w-none flex flex-row items-start items-center gap-6 lg:gap-18">
        <h2
          className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal shrink-0`}
        >
          <span className="block text-white">Uber</span>
          <span className="block text-[#76c893]">Eats</span>
        </h2>
        <p
          className={`${gentonaMedium.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}
        >
          Our team helped American and Canadian restaurants promote Uber Eats as one of their customers' dining options by creating adaptable promotional materials. These included digital templates for evergreen content as well as templates made to fit specific Uber Eats events and discounts.
        </p>
      </div>
    </div>
  );
}