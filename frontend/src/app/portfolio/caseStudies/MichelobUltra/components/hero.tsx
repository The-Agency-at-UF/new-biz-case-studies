import { gentonaBook, gentonaMedium } from "@/app/fonts";
export default function MichelobUltra_Hero() {
  return (
      <div className="relative">
        <img src="/assets/MichelobUltra/ultrabg.jpg" className="bg-[url('/assets/MichelobUltra/ultrabg.jpg')] bg-cover bg-no-repeat w-full h-auto"></img>
        {/*Case Study rectangle */}
        <div className="absolute flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 bg-gradient-to-t from-[#00346D] from-20% via-[#A4D1D9]/3 via-80% to-transparent">
            <div className="h-full z-10 flex flex-col justify-center py-10">
                <p className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-white px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#00346D]/30 backdrop-blur-sm w-fit`}>
                case study</p>
                <img src="/assets/MichelobUltra/header_logos.png" className="w-full h-auto"></img>
                <hr className="border-[#D22030] border-t-4 my-4 w-full"></hr>
                <p className={`${gentonaBook.className} text-sm md:text-lg lg:text-4xl text-white`}>Team Agency Assists Team Ultra’s Joy Wins Campaign</p>
            </div>
      </div>
{/*         <div className="mb-6">
            <span className="border-[3px] border-white px-6 py-2 rounded-none text-xl font-bold tracking-wider uppercase bg-[#00346D73]/51 backdrop-blur-sm">
                Case Study
            </span>
        </div>
        <div className="flex flex-row items-center w-full">
            <img src="/assets/MichelobUltra/Logo_Michelob.png"></img>
            <p>X</p>
            <img src="/assets/MichelobUltra/The Agency_White Logo.png"></img>
        </div>
        <h1 className="text-xl font-bold">Team Agency Assists Team Ultra’s Joy Wins Campaign</h1> */}
      </div>
      
    );
}