import Image from "next/image";
import dottedRedCircle from "../assets/dotted-redCircle.svg";
import meaningPhoto from "../assets/MeaningPhoto.png";
import tweets from "../assets/Tweets.png";


export default function CarnivalMeaningSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-22">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
            So, What Does This Mean?
          </h2>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold uppercase text-white md:text-4xl">
                The Answer Is... Relationships.
              </h3>

              <div className="mt-5 space-y-5 text-base leading-tight text-white md:text-2xl">
                <p>
                  A lot of the conversation around wanting to vacation/travel is
                  about spending time with loved ones and creating long-lasting
                  memories with them.
                </p>
                <p>
                  It is not about the place in particular that they want to
                  vacation to... it&apos;s about the people they want to see and
                  spend memorable, quality time with.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[24rem] lg:mx-0">
              <Image
                src={tweets}
                alt="Traveler conversation tweets"
                width={540}
                height={370}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-center text-2xl font-extrabold uppercase text-white md:text-4xl">
              People Are Excited To Travel... But Why Are They Excited?
            </h3>

            <div className="relative mt-8 grid items-start gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[20rem_minmax(0,1fr)]">
              <div className="relative mx-auto w-full max-w-[20rem] lg:mx-0">
                <div className="relative z-20 ml-4 overflow-hidden">
                  <Image
                    src={meaningPhoto}
                    alt="Carnival travelers on deck"
                    width={420}
                    height={520}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative max-w-3xl text-white">
                <p className="text-lg font-extrabold md:text-2xl">
                  The top two results pulled from the Quid map:
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-6 text-base font-semibold text-[#FF6C5C] md:text-2xl">
                  <li>BEACH BABE VACATION 9.9%</li>
                  <li>COUPLE TRAVEL 9.7%</li>
                </ul>

                <div className="mt-8 space-y-7 text-base leading-tight md:text-2xl">
                  <div>
                    <h4 className="font-extrabold text-white">
                      Beach Babe Vacation
                    </h4>
                    <p>
                      Online users mentioned traveling with their
                      &quot;girlfriends&quot; or &quot;gal pals&quot; on
                      &quot;girls trips&quot; to beaches and other vacation
                      spots in the sun.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-white">Couple Travel</h4>
                    <p>
                      Many users mentioned traveling with their
                      &quot;significant other&quot; or &quot;partner&quot; for
                      their first trips together or simply were excited to go on
                      &quot;baecations&quot; again.
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
