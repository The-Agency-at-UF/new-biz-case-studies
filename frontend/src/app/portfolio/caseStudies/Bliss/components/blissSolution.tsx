import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";

export default function BlissSolution() {
    return (
    <div className="relative w-full h-full overflow-visible">
        {/*<img src="/assets/Bliss/opportunityBackground.png" className=" relative inset-0 w-full h-full object-cover"></img>*/}
        {/*Case Study rectangle */}
        <div className = "relative bg-[#F55096] z-10 flex flex-row justify-center h-full px-8 md:px-10 lg:px-12 py-20">
          <div className="max-w-2xl flex flex-col gap-6 lg:gap-12 flex-[1_1_65%] min-w-0">
            <h2 className={`${gentonaMedium.className} text-4xl md:text-6xl lg:text-[6rem] font-black uppercase leading-[0.8] tracking-normal`}>
              <span className="block text-white">The</span>
              <span className="block text-[#5FCAF4]">Solution</span>
            </h2>
              <p className={`${gentonaBook.className} text-sm md:text-2xl lg:text-3xl font-light text-white leading-tight tracking-wide`}>
                During the campaign, we analyzed more than –<span className={`${gentonaBold.className}`}>312k social media posts</span> to guide our strategy. Our team consulted the Bliss' CMO, board of directors and marketing teams weekly and monthly to optimize our marketing strategy throughout the year.
                <br></br><br></br>
                Our AI-generated <span className={`${gentonaBold.className}`}>"mind maps"</span> illustrate the conversations forming and evolving over time across online spaces: social, news, blogs, forums, eCommerce, reviews, comments, etc. The AI analyzes sentence structure, common keywords and upload time among multiple posts.
                <br></br><br></br>
                The numbers don't lie: <span className={`${gentonaBold.className}`}>Purposeful community management is key to brand loyalty.</span>
              </p>
          </div>
          <div className="flex justify-end items-end flex-[1_1_35%] min-w-0 ">
            <img
              src="/assets/Bliss/fixed_open_tub.png"
              alt="Right element"
              className="w-full scale-200 translate-x-[-20%] translate-y-[-20%] md:translate-y-[-5%] overflow-visible"
          />
          </div>
        </div>
      </div>
    );
}