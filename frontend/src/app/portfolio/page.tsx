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
            
            <div className="flex flex-wrap gap-3"> {/* Buttons for category */} 

                <button className="px-4 py-2 bg-white text-black font-bold rounded-md">All</button>
                <button className="px-4 py-2 bg-white text-black font-bold rounded-md">Category</button>
                <button className="px-4 py-2 bg-white text-black font-bold rounded-md">Category</button>
                <button className="px-4 py-2 bg-white text-black font-bold rounded-md">Category</button>
                <button className="px-4 py-2 bg-white text-black font-bold rounded-md">Category</button>
            </div>
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