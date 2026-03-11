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

export default function BartramImpact() {
  return (
    <div className="relative bg-[#A4D1D9] flex flex-col lg:flex-row items-end w-full h-full px-15 md:px-30 lg:px-40 inset-0 gap-10 lg:gap-40">
        <div className="max-w-none flex-1 flex-col gap-6 lg:gap-32">
            <h2 className={`${gentonaMedium.className} text-[2rem] md:text-[4rem] lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
            <span className="block text-white">The</span>
            <span className="block text-[#84AE6B]">Impact</span>
            </h2>
            <ul className={`${gentonaBook.className} mt-6 lg:mt-25 list-disc list-insidetext-sm lg:text-4xl text-white`}>
                <li>Revitalized the apartment complex’s image through production, storytelling and community involvement</li>
                <li>Presented The Bartram as a place where positive lifestyles and inspiration are easily obtained</li>
                <li>Increased reach, impressions and follower count on Instagram and Facebook</li>
            </ul>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 items-center justify-center">
        <img 
            src="/assets/TheBartram/phone_mockup.png" 
            alt="Phone mockup"
            className="w-full xl:w-2/5 h-auto object-contain" 
        />
        <img 
            src="/assets/TheBartram/computer_mockup.png" 
            alt="Computer mockup"
            className="w-full xl:w-4/5 h-auto object-contain" 
        />
        </div>
    </div>
  );
}