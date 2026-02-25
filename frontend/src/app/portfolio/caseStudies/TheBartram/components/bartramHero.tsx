import localFont from "next/font/local";
const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf", 
  display: "swap",
});

const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf", 
  display: "swap",
});

export default function Bartram_Hero() {
  return (
      <div className="relative">
        <img src="/assets/TheBartram/background.png" className="bg-[url('/assets/TheBartram/background.png')] bg-cover bg-no-repeat w-full h-auto"></img>
        {/*Case Study rectangle */}
        <div className="absolute flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 bg-gradient-to-t from-[#A4D1D9] from-20% via-[#A4D1D9]/3 via-80% to-transparent">
            <div className="h-full z-10 flex flex-col justify-center py-10">
                <p className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-white px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#85AE6B]/30 backdrop-blur-sm w-fit`}>
                case study</p>
                <img src="/assets/TheBartram/header_logos.png" className="w-full h-auto"></img>
                <hr className="border-[#85AE6B] border-t-4 my-4 w-full"></hr>
                <p className={`${gentonaBook.className} text-xl lg:text-4xl text-white`}>Distinguishing a local, luxury apartment complex from competitors in a saturated market</p>
            </div>
            {/* <div className="flex flex-col flex-start justify-start mb-20">
                <h1 className="text-xl md:text-4xl lg:text-8xl text-white font-bold">THE</h1>
                <h1 className="text-xl md:text-4xl lg:text-8xl text-[#85AE6B] font-bold">OPPORTUNITY</h1>
            </div> */}
        </div>
      </div>
    );
}