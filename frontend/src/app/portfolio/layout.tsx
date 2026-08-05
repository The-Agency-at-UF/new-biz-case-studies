import { Suspense } from "react";

import PortfolioDial from "./components/PortfolioDial";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <PortfolioDial />
      </Suspense>
      {children}
    </>
  );
}
