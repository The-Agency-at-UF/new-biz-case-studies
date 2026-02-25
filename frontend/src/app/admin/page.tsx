"use client";

import NavBar from "../../components/NavBar";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [isLoadingWhitelist, setIsLoadingWhitelist] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      // In a real application, you would call your backend here to check if the user is whitelisted
      // For now, we'll simulate a check
      const checkWhitelist = async () => {
        setIsLoadingWhitelist(true);
        try {
          // Replace with your actual backend call
          const response = await fetch(
            "http://localhost:8080/api/check-whitelist",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: session.user.email }),
            },
          );
          const data = await response.json();
          console.log(session);
          if (data.isWhitelisted) {
            setIsWhitelisted(true);
          } else {
            // Not whitelisted, redirect to an unauthorized page or home
            router.push("/"); // Redirect to home or a specific unauthorized page
          }
        } catch (error) {
          console.error("Error checking whitelist:", error);
          router.push("/"); // Redirect on error
        } finally {
          setIsLoadingWhitelist(false);
        }
      };
      checkWhitelist();
    }
  }, [session, status, router]);

  if (status === "loading" || isLoadingWhitelist) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <NavBar />
        <div>
          <h1 className="text-foreground">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!isWhitelisted) {
    // This state should ideally be handled by the redirect in useEffect
    // but as a fallback, we can show a message
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <NavBar />
      <div>
        <h1 className="text-foreground">Welcome to the Admin Page!</h1>
        <p>You are logged in as: {session?.user?.email}</p>
        {/* Admin content goes here */}
      </div>
    </div>
  );
}
