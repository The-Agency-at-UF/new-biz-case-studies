export default function MichelobUltra_Hero() {
  return (
      <div className="pt-40 px-12 pb-20 bg-[url(/assets/TheBartram/BG Photo.jpg)] bg-cover bg-center bg-no-repeat w-full">
        <div className="bg-linear-to-b from-cyan-500/500 to-blue-500 w-full h-full"></div>
        {/*Case Study rectangle */}
        <div className="mb-6">
            <span className="border-[3px] border-white px-6 py-2 rounded-none text-xl font-bold tracking-wider uppercase bg-[#00346D73]/51 backdrop-blur-sm">
                Case Study
            </span>
        </div>
        <div className="flex flex-row items-center w-full">
            <img src="/assets/MichelobUltra/Logo_Michelob.png"></img>
            <p>X</p>
            <img src="/assets/MichelobUltra/The Agency_White Logo.png"></img>
        </div>
        <h1 className="text-xl font-bold">Team Agency Assists Team Ultra’s Joy Wins Campaign</h1>
      </div>
    );
}