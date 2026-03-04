"use client";

import NavBar from "../../components/NavBar";
import localFont from "next/font/local";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const franklinGothicBold = localFont({
  src: "../../../public/fonts/Franklin Gothic Bold.ttf",
  display: "swap",
});


export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const { data: session } = useSession();

  useEffect(() => {
    if (error) {
      alert("Login failed: " + error + ". Please ensure you have authorization.");
    }
  }, [error]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="grid grid-cols-3 gap-5 h-full w-full">
          <img src="/blobs/Agency Blobs Graphic-02.png" className="w-full h-full object-cover" />
          <img src="/blobs/Agency Blobs Graphic-08.png" className="w-full h-full object-cover" />
          <img src="/blobs/Agency Blobs Graphic-09.png" className="w-full h-full object-cover" />
          <img src="/blobs/Agency Blobs Graphic-03.png" className="w-full h-full object-cover rotate-32" />
          <img src="/blobs/Agency Blobs Graphic-06.png" className="w-full h-full mt-7 object-cover" />
          <img src="/blobs/Agency Blobs Graphic-04.png" className="w-full h-full object-cover" />
        </div>
      </div>
      <NavBar />
      <div className={"w-1/2 h-1/4 relative fit-content"}>
        <img src="/Agency_logo_2.png" alt="Hero Image"/>
      </div>
      
    
      <button onClick={() => signIn("google")} className=" cursor-pointer text-sm lg:text-2xl mt-10 p-2 z-50 text-white rounded">
        <span className={`${franklinGothicBold.className}`}>LOGIN</span>
      </button>
      
      
    </div>
  );
}