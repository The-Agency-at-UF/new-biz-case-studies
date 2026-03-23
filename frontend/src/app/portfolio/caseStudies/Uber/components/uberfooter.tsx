export default function UberFooter() {
    return (
      <div
        className="relative w-full flex flex-col items-center justify-center py-24 md:py-40 gap-10"
        style={{ background: "linear-gradient(to bottom, #142328 0%, #0a0f0d 100%)" }}
      >
        <hr className="border-[#68BF70] border-t-2 w-[75%]" />
        <img
          src="/assets/Uber/uber_logos.png"
          alt="Uber x The Agency at the University of Florida"
          className="w-[60%] h-auto mt-15"
        />
      </div>
    );
  }