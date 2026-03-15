import Image from "next/image";
import Hat1 from "../assets/CokeHat1.png";
import Hat2 from "../assets/CokeHat2.svg";
import CokeAccentLinesV2 from "./CokeAccentLinesV2";

export default function CokeSolutionSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-10 md:py-14">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="py-6">
          <h1 className="text-6xl md:text-7xl font-extrabold">THE</h1>
          <h1 className="text-6xl md:text-7xl text-[#DA2028] font-extrabold">
            SOLUTION
          </h1>
        </div>
        <div className="grid gap-6">
          <div className="relative z-20 justify-self-start -ml-6 max-w-4xl">
            <div className="max-w-4xl rounded-3xl border-[2px] border-[#ED1C24] bg-black p-10 text-left md:p-12">
              <p className="text-lg md:text-2xl font-bold">
                To better understand fan sentiment, our team created and disseminated a survey.
              </p>
              <p className="mt-4 text-lg md:text-2xl">
                In just 48 hours, we had 115 responses from students and alumni at nine football-oriented
                universities across the United States. From these surveys, we discovered what fans missed
                most about their favorite game days. Respondents discussed rival-relations, apparel, atmosphere,
                sunburns, hoarseness-you name it.
              </p>
            </div>
            <Image
              src={Hat1}
              alt="Coke Bucket Hat"
              className="absolute -top-[2.5rem] -right-[5rem] z-20 h-auto w-[10rem] md:-top-[3.25rem] md:-right-[9rem] md:w-[13rem] lg:-top-16 lg:-right-55 lg:w-70"
            />
          </div>
          <div className="relative z-10 ml-auto mr-8 -mt-10 max-w-3xl rounded-3xl border-[2px] border-[#ED1C24] bg-black p-10 text-left md:-mt-12 md:p-12">
            <p className="text-lg md:text-2xl">
              After cleaning and coding the data, we used our insights to refine and adjust Coke&apos;s current
              creative concepts. KO:OP planned a broad range of tactics for all three flagship brands-Diet Coke,
              Coke Red and Coke Zero. Our Gen Z perspective allowed us to develop ideas that resonated with
              college students during an unprecedented time in their academic careers.
            </p>
          </div>
          <div className="relative z-0 -mt-10 ml-50 max-w-2xl md:-mt-12">
            <div className="max-w-2xl rounded-3xl border-[2px] border-[#ED1C24] bg-black p-10 text-left md:p-12">
              <p className="text-lg md:text-2xl">
                Using traditional and digital methods, we were able to adapt Coke&apos;s strategy to fit the needs
                of the present moment.
              </p>
              <p className="mt-4 text-lg md:text-2xl">
                We suggested entirely new directions, some traditional and some digital, through our Gen Z lens.
              </p>
            </div>
            <Image
              src={Hat2}
              alt="Coke promotional hat"
              className="absolute -top-[4rem] -left-[6rem] z-20 h-auto w-[10rem] md:-top-[6rem] md:-left-[9rem] md:w-[14rem] lg:-top-45 lg:-left-35 lg:w-75"
            />
          </div>
        </div>
      </div>
      <CokeAccentLinesV2 />
    </section>
  );
}
