//import Image from "next/image"; // use Next.js Image component for any images
import NavBar from "../../../../components/NavBar";
import BlissHero from "./components/hero";

export default function BlissPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
        <NavBar />
        <BlissHero />
    </div>
  );
}