import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-work-sans",
});

export const gentonaMedium = localFont({
  src: "../../public/fonts/Gentona Medium.otf",
  display: "swap",
  variable: "--font-gentona",
});

export const gentonaBook = localFont({
  src: "../../public/fonts/Gentona Book.otf",
  display: "swap",
  variable: "--font-gentona-book",
});

export const gentonaBold = localFont({
  src: "../../public/fonts/Gentona Bold.otf",
  display: "swap",
  variable: "--font-gentona-bold",
});

export const franklinGothicRegular = localFont({
  src: "../../public/fonts/Franklin Gothic regular.ttf",
  display: "swap",
  variable: "--font-franklin-gothic-regular",
});

export const obviouslyExtendedMedium = localFont({
  src: "../../public/fonts/Obviously-ExtendedMedium.otf",
  display: "swap",
  variable: "--font-obviously-extended-medium",
});

export const systemFontStacks = {
  timesNewRoman: '"Times New Roman", Times, serif',
} as const;
