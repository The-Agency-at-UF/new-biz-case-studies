import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-work-sans",
});

const gentona = localFont({
  src: [
    {
      path: "../../../../../public/fonts/Gentona Medium.otf", 
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gentona",
});

export default function AmazonAlexaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The variables are applied here so the entire route segment inherits them
    <div className={`${workSans.variable} ${gentona.variable} antialiased`}>
      {children}
    </div>
  );
}