import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";

export default function OpportunitySection() {
    return (
    <div className="relative w-full min-h-screen overflow-hidden">
        {/*<img src="/assets/Bliss/opportunityBackground.png" className=" relative inset-0 w-full h-full object-cover"></img>*/}
        {/*Case Study rectangle */}
        <div className = "relative bg-[#F55096] z-10 flex flex-row justify-center h-full px-8 md:px-10 lg:px-12 py-20">
          <div className="max-w-2xl flex flex-col gap-6 lg:gap-12 flex-[1_1_65%] min-w-0">
            <h2 className={`${gentonaMedium.className} text-4xl lg:text-[6rem] font-black uppercase leading-[0.8] tracking-normal`}>
              <span className="block text-white">The</span>
              <span className="block text-[#5FCAF4]">Opportunity</span>
            </h2>
              <p className={`${gentonaBook.className} text-sm lg:text-3xl font-light text-white leading-tight tracking-wide`}>
                Healthy skin isn’t a luxury –<span className={`${gentonaBold.className}`}>it’s a necessity.</span> Bliss knew this fact long before it was a trend, championing skincare as self-care beginning in the 1990s. Despite its decades-old ingenuity, <span className={`${gentonaBold.className}`}>Bliss struggled to gain the interest of younger generations.</span> 
                <br></br><br></br>
                Bliss, alongside Chicago-based agency Movers+Shakers, came to us <span className={`${gentonaBold.className}`}>to reach Gen Z and millennial audiences.</span>
                <br></br><br></br>
                Together, we determined content recommendations for Bliss’ Instagram and TikTok while discovering new ways to build brand loyalty.
              </p>
          </div>
          <div className="flex justify-end items-end flex-[1_1_35%] min-w-0 ">
            <img
              src="/assets/Bliss/might_marshmallow_tower.png"
              alt="Right element"
              className="w-full"
          />
          </div>
        </div>
      </div>
    );
}