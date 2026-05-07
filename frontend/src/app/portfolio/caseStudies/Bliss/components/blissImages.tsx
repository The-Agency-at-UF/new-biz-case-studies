export default function BlissImages() {
  return (
    <section className="relative w-full overflow-visible bg-[#F55096] px-8 py-[clamp(4rem,8vw,8rem)] md:px-10 lg:px-12">
      <div className="relative flex min-h-[clamp(460px,56vw,820px)] items-center justify-center overflow-visible">
        {/* Left decorative group - intentionally spills off page */}
        <div className="relative min-h-[clamp(420px,52vw,760px)] flex-1 overflow-visible">
          <img
            src="/assets/Bliss/cream.png"
            alt="Cream"
            className="absolute scale-140 left-[-45%] top-1/2 z-0 w-[clamp(420px,62vw,980px)] -translate-y-1/2"
          />

          <img
            src="/assets/Bliss/grapefruit_with_shadow.png"
            alt="Grapefruit"
            className="absolute left-[-28%] top-1/2 z-10 w-[clamp(340px,50vw,820px)] -translate-y-1/2 rotate-[30deg]"
          />
        </div>

        {/* Right TikTok mockup */}
        <div className="relative flex flex-1 items-center justify-center">
          <img
            src="/assets/Bliss/Bliss_Ticktok_Video.png"
            alt="TikTok mockup"
            className="w-[clamp(180px,22vw,320px)] translate-x-[10%] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}