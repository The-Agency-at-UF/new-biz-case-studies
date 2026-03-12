import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (user?.email) {
        try {
          const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
          const res = await fetch(`${backendUrl}/api/check-whitelist`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
          });

          if (res.ok) {
            const data = await res.json();
            if (data.isWhitelisted) {
              return true; // Allow sign in
            }
          }
          // If not whitelisted or API call failed, redirect with error
          return "/login?error=AccessDenied";
        } catch (error) {
          console.error("Error checking whitelist:", error);
          return "/login?error=ServerError";
        }
      }
      return false; // Deny sign in if no email
    },
      async redirect({ url, baseUrl }) {
      // After successful login, send to admin
      return `${baseUrl}/admin`;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
