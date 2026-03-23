import { gentonaMedium } from "@/app/fonts";

export default function UberExecutionSection() {
  return (
    <div className="relative flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 py-38 bg-[#142328]">
      <div className="max-w-none flex flex-col gap-12">
        <h2
          className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.85] tracking-normal`}
        >
          <span className="block text-white">The</span>
          <span className="block text-[#76c893]">Execution</span>
        </h2>

        <div
          className={`${gentonaMedium.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide flex flex-col gap-6`}
        >
          <p>
            We collaborated with Uber&apos;s global marketing and creative teams on
            the ideation and execution of a number of creative briefs. These
            included copy for collaborations and brand activations, including{" "}
            <strong className="font-black">Uber x Yankees, Uber x Walgreens</strong>{" "}
            and <strong className="font-black">Uber&apos;s Go Get Event</strong>.
            With the Uber team, our data analysts moderated interviews and
            developed scripts for surveys, both of which generated insights on
            user experience.
          </p>
          <p>
            Each month, we presented actionable recommendations for Uber. We
            conducted an audit of Uber&apos;s current standing with social channels,
            gaming and loyalty programs to suggest new ways the technology
            company could{" "}
            <strong className="font-black">
              maximize brand affinity among Gen Z and younger millennials
            </strong>
            .
          </p>
          <p>
            We showed Uber&apos;s teams which kinds of messaging maintain customer
            loyalty in a general market and which emerging channels would be
            most advantageous to use when targeting Gen Z.
          </p>
        </div>
      </div>
    </div>
  );
}

