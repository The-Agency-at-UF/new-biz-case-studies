import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gentona = localFont({
  src: [
    { path: "../fonts/Gentona Thin.otf", weight: "100" },
    { path: "../fonts/Gentona ExtraLight.otf", weight: "200" },
    { path: "../fonts/Gentona Light.otf", weight: "300" },
    { path: "../fonts/Gentona Book.otf", weight: "400" },
    { path: "../fonts/Gentona Medium.otf", weight: "500" },
    { path: "../fonts/Gentona SemiBold.otf", weight: "600" },
    { path: "../fonts/Gentona Bold.otf", weight: "700" },
    { path: "../fonts/Gentona ExtraBold.otf", weight: "800" },
    { path: "../fonts/Gentona Heavy.otf", weight: "900" },
  ],
});




export const metadata: Metadata = {
  title: "The Agency at UF, Case Studies",
  description: "Marketing and Communications Agency",
  icons: {
    icon: "/AGENCY FAVICON.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
