

export default function PrivateHireBadges() {
  return (
    <div className="flex flex-row justify-center gap-6 md:gap-12 lg:gap-24 flex-wrap w-full">
      <img
        src="/assets/Uber/blackprivate.png"
        alt="Uber Private Hire Only - Dark"
        className="w-[40%] min-w-[200px] h-auto object-contain"
      />
      <img
        src="/assets/Uber/whiteprivate.png"
        alt="Uber Private Hire Only - Light"
        className="w-[40%] min-w-[200px] h-auto object-contain"
      />
    </div>
  );
}