"use client";

import { Suspense, useEffect } from "react";
import NavBar from "../../components/NavBar";
import LoginBkgd from "./components/loginBkgd";
import localFont from "next/font/local";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const franklinGothicBold = localFont({
  src: "../../../public/fonts/Franklin Gothic Bold.ttf",
  display: "swap",
});

function LoginPageContent() {
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

      <div className="relative w-1/2 h-1/4 fit-content">
        <img src="/Agency_logo_2.png" alt="Hero Image" />
      </div>

      <button
        onClick={() => signIn("google")}
        className="cursor-pointer text-sm lg:text-2xl mt-10 p-2 z-50 text-white rounded"
      >
        <span className={franklinGothicBold.className}>LOGIN</span>
      </button>
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