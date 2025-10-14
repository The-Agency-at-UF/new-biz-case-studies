import PortfolioCard from "../components/PortfolioCard";

export default function PortfolioPage() {
    return (
        <div>
            <div> 
                {/* Where nav bar will go */}
            </div>

            <div>
                {/* Hero section */}
                <div>Portfolio Page</div>
            </div>
            
            <div> {/* Buttons for category */} </div>
            <div className="flex flex-wrap gap-10"> 
                <PortfolioCard /> 
                <PortfolioCard /> 
                <PortfolioCard /> 
                <PortfolioCard /> 
                <PortfolioCard /> 
            </div>

        </div>
        
        









    );
}