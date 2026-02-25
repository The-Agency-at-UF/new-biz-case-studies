"use client";

import NavBar from "../../components/NavBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

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
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <NavBar />
      <div>
        <h1 className="text-foreground">Login under construction... Check back soon!</h1>
        {session ? (
          <button onClick={() => signOut()} className="mt-4 p-2 bg-red-500 text-white rounded">
            Sign out
          </button>
        ) : (
          <button onClick={() => signIn("google")} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}