import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";

export default function OpportunitySection() {
    return (
    <div className="relative flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0">
        {/* <img src="/assets/TheBartram/background.png" className="bg-[url('/assets/TheBartram/background.png')] bg-cover bg-no-repeat w-full h-auto"></img> */}
        {/*Case Study rectangle */}
        <div className="max-w-none flex flex-col gap-6 lg:gap-18">
        <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
          <span className="block text-white">The</span>
          <span className="block text-[#5FCAF4]">Opportunity</span>
        </h2>
            <p className={`${gentonaBook.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}>
                People love to discover that Amazon Alexa knows about their favorite game, anime or TV show. To make this kind of experience possible, Alexa must be able to answer questions about the most popular aspects of today’s culture. It should be carefully crafted to withstand the culture’s complex, ever-changing nature.
                <br></br><br></br>
                In light of this challenge, the <span className={`${gentonaBold.className}`}>Amazon Alexa Personality Team</span> had an important task for us: surprise and delight Alexa users from around the globe while staying true to Alexa’s personality. We were ready to research and write.

            </p>
        </div>
      </div>
    );
}