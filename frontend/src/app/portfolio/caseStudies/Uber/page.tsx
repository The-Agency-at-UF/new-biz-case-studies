// // import NavBar from "../../../../components/NavBar";
// // import UberHero from "./components/hero"; 



// // export default function UberPage() {
// //   return (
// //     <div className="min-h-screen text-white bg-[#1a2a2f]">
// //       <div className="w-full">
// //         <NavBar />
// //       </div>
// //         <UberHero />
// //     </div>
// //   );
// // }

// import NavBar from "../../../../components/NavBar";
// import UberHero from "./components/hero";

// export default function UberPage() {
//   return (
//     <div className="min-h-screen text-white bg-[#1a2a2f]">
//       <div className="w-full">
//         <NavBar />
//       </div>
//       <UberHero />
//     </div>
//   );
// }

import NavBar from "../../../../components/NavBar";
import UberHero from "./components/hero"; 

export default function UberPage() {
  return (
    <div className="min-h-screen text-white bg-[#1a2a2f]">
      {/* NavBar usually stays full width, but internal links align to the container */}
      <NavBar />

      {/* Horizontal Padding Container:
         - px-8: Mobile padding (32px)
         - lg:px-20: Desktop padding (80px) to match your visual layout
         - max-w-[120rem]: Prevents layout from getting too wide on ultrawide monitors
      */}
      <main className="w-full max-w-[120rem] mx-auto px-8 lg:px-20">
        <UberHero />
        
        {/* Any future components added here will now line up perfectly */}
        {/* <OpportunitySection /> */}
        {/* <UberBlackSection /> */}
      </main>
    </div>
  );
}