// "use client";

// import Image from "next/image";
// import localFont from "next/font/local";

// const gentonaMedium = localFont({
//   src: "../../../../../../public/fonts/Gentona Medium.otf", 
//   display: "swap",
// });

// export default function UberHero() {
//   return (
//     <section className={`relative w-full h-[100dvh] min-h-[46.875rem] ${gentonaMedium.className}`}>
      
//       {/* 1. BACKGROUND IMAGE LAYER (z-0) 
//           Full-bleed breakout: ignores parent padding to touch all screen edges */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
//         <Image
//           src="/assets/Uber/uberbg.png"
//           alt="Uber Background Banner"
//           fill
//           className="object-cover scale-x-[-1] object-center"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-[#1a2a2f] via-transparent to-transparent" />
//       </div>

//       {/* 2. INDEPENDENT TEXT CONTAINER (z-1) */}
//       <div className="relative z-[1] w-full h-full flex flex-col justify-end pb-[4rem]">
//         {/* Increased max-width to 110rem to bring items closer to the screen edges */}
//         <div className="max-w-[110rem] mx-auto w-full px-[1.5rem] lg:px-[4rem]">
          
//           {/* Tag Box */}
//           <div className="mb-[2.5rem] w-fit">
//             <span className="border-[0.25rem] border-white pt-[1.25rem] pb-[1.25rem] pl-[0.75rem] pr-[0.75rem] text-[1.75rem] font-bold tracking-wider uppercase bg-[#68BF70]/50 backdrop-blur-sm text-white leading-none">
//               Case Study
//             </span>
//           </div>

//           {/* Logos Row - Extreme scale */}
//           <div className="flex items-end gap-[4rem] mb-[3rem]">
//             {/* Uber Logo: Increased to 32rem width */}
//             <div className="relative w-[32rem] h-[14rem] pt-[1.5rem] pb-[1.5rem] pl-[0.5rem] pr-[0.5rem]">
//               <Image 
//                 src="/assets/Uber/uber_logo.png" 
//                 alt="Uber Logo" 
//                 fill 
//                 className="object-contain object-bottom" 
//               />
//             </div>

//             {/* Separator: Massive X */}
//             <span className="text-[8rem] font-extralight text-white leading-none pb-[2.5rem]">×</span>

//             {/* Agency Logo: Increased to 48rem width */}
//             <div className="relative w-[48rem] h-[14rem] pt-[1.5rem] pb-[1.5rem] pl-[0.5rem] pr-[0.5rem]">
//               <Image 
//                 src="/Agency_logo_2.png" 
//                 alt="Agency Logo" 
//                 fill 
//                 className="object-contain object-bottom" 
//               />
//             </div>
//           </div>

//           {/* Accent Line - Thicker for visual weight */}
//           <div className="w-full h-[0.375rem] bg-[#68BF70] mb-[3rem] max-w-[95rem]" />

//           {/* Headline Box - Scaled for high impact */}
//           <div className="max-w-[95rem] pt-[1rem] pb-[1rem] pl-[0.5rem] pr-[0.5rem]">
//             <p className="text-[4.5rem] md:text-[5.5rem] font-medium leading-[1.1] drop-shadow-2xl text-white tracking-tight">
//               Sharing a Ride with Uber on Its Road to Refined Research and Captivating Assets
//             </p>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }


"use client";

import Image from "next/image";
import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf", 
  display: "swap",
});

export default function UberHero() {
  return (
    <section className={`relative w-full h-[100dvh] min-h-[46.875rem] ${gentonaMedium.className}`}>
      
      {/* 1. BACKGROUND IMAGE LAYER (z-0) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-0 overflow-hidden">
        <Image
          src="/assets/Uber/uberbg.png"
          alt="Uber Background Banner"
          fill
          className="object-cover scale-x-[-1] object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-[#1a2a2f] via-transparent to-transparent" />
      </div>

      {/* 2. INDEPENDENT TEXT CONTAINER (z-1) 
          Increased pb-[4rem] to pb-[10rem] to move all content higher up the screen.
      */}
      <div className="relative z-[1] w-full h-full flex flex-col justify-end pb-[10rem]">
        <div className="max-w-[110rem] mx-auto w-full px-[1.5rem] lg:px-[4rem]">
          
          {/* Tag Box */}
          <div className="mb-[2.5rem] w-fit">
            <span className="border-[0.25rem] border-white pt-[1.25rem] pb-[1.25rem] pl-[0.75rem] pr-[0.75rem] text-[1.75rem] font-bold tracking-wider uppercase bg-[#68BF70]/50 backdrop-blur-sm text-white leading-none">
              Case Study
            </span>
          </div>

          {/* Logos Row */}
          <div className="flex items-end gap-[4rem] mb-[3rem]">
            <div className="relative w-[32rem] h-[14rem] pt-[1.5rem] pb-[1.5rem] pl-[0.5rem] pr-[0.5rem]">
              <Image 
                src="/assets/Uber/uber_logo.png" 
                alt="Uber Logo" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>

            <span className="text-[8rem] font-extralight text-white leading-none pb-[2.5rem]">×</span>

            <div className="relative w-[48rem] h-[14rem] pt-[1.5rem] pb-[1.5rem] pl-[0.5rem] pr-[0.5rem]">
              <Image 
                src="/Agency_logo_2.png" 
                alt="Agency Logo" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>
          </div>

          {/* Accent Line */}
          <div className="w-full h-[0.375rem] bg-[#68BF70] mb-[2.5rem] max-w-[85rem]" />

          {/* Headline Box */}
          <div className="max-w-[85rem] pt-[1rem] pb-[1rem] pl-[0.5rem] pr-[0.5rem]">
            <p className="text-[2.8rem] md:text-[4rem] font-medium leading-[1.2] drop-shadow-2xl text-white tracking-tight">
              Sharing a Ride with Uber on Its Road to Refined Research and Captivating Assets
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}