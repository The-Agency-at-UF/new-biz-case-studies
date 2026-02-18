import localFont from "next/font/local";
const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});

const gentonaBold = localFont({
  src: "../../../../../../public/fonts/Gentona Bold.otf",
  display: "swap",
});

export default function BartramSolution() {
  return (
    <div className="relative bg-[#A4D1D9] flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0">
      {/* <img src="/assets/TheBartram/background.png" className="bg-[url('/assets/TheBartram/background.png')] bg-cover bg-no-repeat w-full h-auto"></img> */}
      {/*Case Study rectangle */}
      <div className="max-w-none flex flex-col gap-6 lg:gap-18">
        <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
          <span className="block text-white">The</span>
          <span className="block text-[#84AE6B]">Solution</span>
        </h2>
          <p className={`${gentonaBook.className}  text-sm lg:text-4xl text-white`}>
              To combat this challenge, we devised a cohesive, purpose-driven strategy that expanded <b>The Bartram</b> beyond the normal confines of an apartment complex. 
              Using our research on the industry and young professionals who are interested in apartment living, we determined the best ways for this client to connect with all relevant audiences. 
              These ways included creating <span className={`${gentonaBold.className}`}>partnerships</span> with local businesses, highlighting <b>amenities</b> through up-scale <b>production shoots</b> and reinforcing a <b>sense of community</b> through resident and staff highlights.
              We even created content surrounding wellness and local finds.
          </p>
      </div>
    </div>
  );
}