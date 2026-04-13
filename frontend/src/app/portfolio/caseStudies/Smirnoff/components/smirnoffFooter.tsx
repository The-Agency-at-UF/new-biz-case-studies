export default function SmirnoffFooter() {
  return (
    <footer className="bg-black pb-0 text-white">
      <div className="relative w-full">
        <img
          src="/assets/Smirnoff/footerimage.jpeg"
          alt=""
          className="relative z-0 block h-auto w-full max-w-none object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center px-15 pt-8 md:px-30 md:pt-12 lg:px-40 lg:pt-14">
          <img
            src="/assets/Smirnoff/smirnoffLogo.png"
            alt="Smirnoff"
            className="h-auto w-full max-w-3xl"
          />
        </div>
      </div>
    </footer>
  );
}
