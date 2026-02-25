"use client";

import NavBar from "../../components/NavBar";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <NavBar />
      <div>
        <h1 className="text-foreground">Login under construction... Check back soon!</h1>
        <button onClick={() => signIn("google")} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}