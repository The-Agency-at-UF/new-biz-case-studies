import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";

export default function BlissHero() {
  return (
    <div className="relative">
        <img src="/assets/Bliss/backgroundImage.png" className="bg-[url('/assets/Bliss/backgroundImage.png')] bg-cover bg-no-repeat w-full h-auto"></img>
        {/*Case Study rectangle */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F55096] from-20% via-[#F55096]/3 via-80% to-transparent">
            <div className="h-full z-10 flex flex-col justify-center px-8 md:px-10 lg:px-12 max-w-[800px]">
                <p className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-[#75CFE5] px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#F55096]/50 backdrop-blur-sm w-fit`}>
                case study</p>
                <img src="/assets/Bliss/blissAgencyLogo.png" className="w-full h-auto"></img>
                <hr className="border-[#75CFE5] border-t-4 my-4 w-full"></hr>
                <p className={`${gentonaBold.className} text-xl md:text-2xl lg:text-4xl text-white`}>Helping Bliss Get Skin in the Gen Z Game</p>
            </div>
        </div>
      </div>
  )
}