"use client";

import { Suspense, useEffect } from "react";
import NavBar from "../../components/NavBar";
import LoginBkgd from "./components/loginBkgd";
import localFont from "next/font/local";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const franklinGothicBold = localFont({
  src: "../../../src/app/fonts/franklin-gothic/Franklin Gothic Bold.ttf",
  display: "swap",
});

function LoginPageContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) {
      alert("Login failed: " + error + ". Please ensure you have authorization.");
    }
  }, [error]);

  return (
  <div className="relative min-h-dvh w-full overflow-hidden bg-black flex items-center justify-center">
    <LoginBkgd />
    <NavBar />

    <div className="relative z-10 flex flex-col items-center mt-20">
      <div className="w-[50%]">
        <img
          src="logos/Agency_logo_2.png"
          alt="The Agency Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      <button
        onClick={() => signIn("google")}
        className="cursor-pointer text-sm lg:text-2xl mt-20 p-2 text-white rounded"
      >
        <span className={franklinGothicBold.className}>LOGIN</span>
      </button>
    </div>
  </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LoginPageContent />
    </Suspense>
  );
}