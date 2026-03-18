"use client";

import NavBar from "../../components/NavBar";
import LoginBkgd from "./components/loginBkgd";
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
      <LoginBkgd />
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