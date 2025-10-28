
import PortfolioBar from "./components/PortfolioBar";
import PortfolioCard from "./components/PortfolioCard";

export default function PortfolioPage() {
  return (
    <div>
      <PortfolioBar />

      <div className="pt-20 px-6">
        <div>Portfolio Page</div>
        <PortfolioCard />
      </div>
    </div>
  );
}
