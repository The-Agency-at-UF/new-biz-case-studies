import { Work_Sans } from "next/font/google";
import { gentonaMedium } from "@/app/fonts";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-work-sans",
});

export default function AmazonAlexaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The variables are applied here so the entire route segment inherits them
    <div className={`${workSans.variable} ${gentonaMedium.variable} antialiased`}>
      {children}
    </div>
  );
}