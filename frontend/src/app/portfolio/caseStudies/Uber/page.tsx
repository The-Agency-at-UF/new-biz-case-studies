import NavBar from "../../../../components/NavBar";
import UberHero from "./components/hero"; 



export default function UberPage() {
  return (
    <div className="min-h-screen text-white bg-[#1a2a2f]">
      <div className="w-full">
        <NavBar />
      </div>
        <UberHero />
    </div>
  );
}