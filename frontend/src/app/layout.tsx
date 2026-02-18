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

export const gentona = localFont({
  src: [
    { path: "./fonts/gentona/Gentona Thin.otf", weight: "100" },
    { path: "./fonts/gentona/Gentona ExtraLight.otf", weight: "200" },
    { path: "./fonts/gentona/Gentona Light.otf", weight: "300" },
    { path: "./fonts/gentona/Gentona Book.otf", weight: "400" },
    { path: "./fonts/gentona/Gentona Medium.otf", weight: "500" },
    { path: "./fonts/gentona/Gentona SemiBold.otf", weight: "600" },
    { path: "./fonts/gentona/Gentona Bold.otf", weight: "700" },
    { path: "./fonts/gentona/Gentona ExtraBold.otf", weight: "800" },
    { path: "./fonts/gentona/Gentona Heavy.otf", weight: "900" },
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
