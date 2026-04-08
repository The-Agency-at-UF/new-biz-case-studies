export default function SmirnoffFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col items-center px-15 md:px-30 lg:px-40 pt-12 md:pt-16 pb-8 gap-8">
        <img
          src="/assets/Smirnoff/HeroLogo.png"
          alt="Smirnoff × The Agency at the University of Florida"
          className="w-full max-w-3xl h-auto"
        />
        <a
          href="https://stock.adobe.com/video/pouring-a-martini-slow-motion-shot-on-phantom-flex-4k-at-1000-fps/120566834?prev_url=detail"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base text-white/80 hover:text-white underline underline-offset-4 text-center break-all max-w-4xl"
        >
          Adobe Stock — pouring a martini (slow motion, Phantom Flex 4K)
        </a>
      </div>
      <img
        src="/assets/Smirnoff/Group%2085.png"
        alt=""
        className="w-full h-auto object-cover"
      />
    </footer>
  );
}
