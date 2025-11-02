export default function PortfolioCard() {
    return (

    <div className="gradient-outline inline-block p-6 rounded-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:border-white cursor-pointer">
    <img src="/path/to/image.jpg" alt="Project Image" className="size-56 rounded-lg opacity-90 hover:opacity-75 transition-opacity duration-300" />
    <h2 className="font-bold mt-2">Project Title</h2>
    <p>Short description of the project.</p>
    </div>




    );
}