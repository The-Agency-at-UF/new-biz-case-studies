import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";

export default function BlissImpact() {
    return (
    <div className="relative w-full h-full overflow-visible">
        {/*<img src="/assets/Bliss/opportunityBackground.png" className=" relative inset-0 w-full h-full object-cover"></img>*/}
        {/*Case Study rectangle */}
        <div className = "relative bg-[#F55096] z-10 flex flex-row justify-center h-full px-8 md:px-10 lg:px-12">
          <div className="max-w-2xl flex flex-col gap-6 lg:gap-12 flex-[1_1_65%] min-w-0">
            <h2 className={`${gentonaMedium.className} text-4xl md:text-6xl lg:text-[6rem] font-black uppercase leading-[0.8] tracking-normal`}>
              <span className="block text-white">The</span>
              <span className="block text-[#5FCAF4]">Impact</span>
            </h2>
              <p className={`${gentonaBook.className} text-sm md:text-2xl lg:text-3xl font-light text-white leading-tight tracking-wide`}>
                Now, Bliss' TikTok glows because of our insights and suggestions. Organically engaging with community-based content allowed Bliss to gain clout among younger audiences. One of Bliss' comments, which we wrote, garnered more than 20k likes.
                <br></br><br></br>
                With a following <span className={`${gentonaBold.className}`}>increase from 380k in March 2021 to 404K in August 2022</span>, the brand now holds the <span className={`${gentonaBold.className}`}>7th</span> highest TikTok following among direct competitors.
              </p>
          </div>
          <div className="flex justify-center items-center flex-[1_1_40%] min-w-0 ">
            <img
              src="/assets/Bliss/Bliss_TickTok.png"
              alt="Right element"
              className="w-[200px] md:w-[250px] lg:w-[300px]"
          />
          </div>
        </div>
      </div>
    );
}