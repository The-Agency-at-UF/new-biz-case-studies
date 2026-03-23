type WelcomeCardProps = {
  email?: string;
  onLogout: () => void;
};

import localFont from "next/font/local";
const gentonaMedium = localFont({
  src: "../../../../public/fonts/Gentona Medium.otf", 
  display: "swap",
});

const gentonaBook = localFont({
  src: "../../../../public/fonts/Gentona Book.otf", 
  display: "swap",
});

export default function WelcomeCard({ email, onLogout }: WelcomeCardProps) {
  return (
    <div className="relative w-[325px] h-[240px]">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 325 240"
        className="absolute inset-0 w-full h-full"
        >
        <path
            d="M29.2515 1.78058C5.57134 -1.05774 2.11799 18.3375 3.35133 28.3899L1.50122 216.429C4.46124 233.459 21.2347 237.716 29.2515 237.716C109.419 238.308 274.933 239.136 295.653 237.716C316.373 236.297 322.787 220.568 323.403 212.881V76.2866C324.883 57.8375 309.22 50.86 301.203 49.6773H253.001C236.501 49.6773 220.173 52.5157 221.653 28.3899C223.133 4.26411 200.069 0.597942 188.352 1.78058H29.2515Z"
            fill="#2A1F63"
            fillOpacity="0.6"
            stroke="#AA9AFF"
            strokeWidth="3"
        />
      </svg>

       {/* Logout Button */}
      <button
        onClick={onLogout}
        className="
          absolute top-1 right-4 z-20
          px-4 py-1.5
          text-sm
          rounded-full
          bg-white text-[#2A1F63]
          font-medium
          hover:opacity-90
          transition
          shadow-md
        "
      >
        log out
      </button>

      {/* Content */}
      <div className="relative z-10 px-8 py-10 text-white">
        <h2 className={`${gentonaMedium.className} text-[40px] leading-tight text-[#F5F5F5] pt-7`}>Welcome</h2>
        <p className={`${gentonaBook.className} text-3xl mt-2`}>{email}!</p>
      </div>
    </div>
  );
}