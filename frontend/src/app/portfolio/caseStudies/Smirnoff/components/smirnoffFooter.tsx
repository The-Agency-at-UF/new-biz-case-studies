const FRAME_RED = "#AC0629";
const FRAME_SIDE_CLASS =
  "pointer-events-none absolute inset-y-0 z-[5] w-1 md:w-4";

export default function SmirnoffFooter() {
  return (
    <footer className="bg-black pb-0 text-white">
      <div className="relative w-full">
        <img
          src="/assets/Smirnoff/footerimage.jpeg"
          className="relative z-0 block h-auto w-full max-w-none object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className={`${FRAME_SIDE_CLASS} left-0`} style={{ backgroundColor: FRAME_RED }} aria-hidden />
        <div className={`${FRAME_SIDE_CLASS} right-0`} style={{ backgroundColor: FRAME_RED }} aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center px-15 pt-8 md:px-30 md:pt-12 lg:px-40 lg:pt-14">
          <img
            src="/assets/Smirnoff/smirnoffLogo.png"
            className="h-auto w-full max-w-3xl"
          />
        </div>
      </div>
      <div className="h-4 w-full" style={{ backgroundColor: FRAME_RED }} aria-hidden />
    </footer>
  );
}
