export default function ChooseYourAdventure() {
    return (
        <section className={"w-full h-dvh flex flex-col justify-center items-center bg-black m-auto"}>
            <div className={"w-1/2 h-1/4 flex flex-row md:gap-15 lg:gap-30 items-center justify-center"}>
            <h1 className={"text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white text-center"}>
                What is the Agency?
            </h1>
            <h1 className={"text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white text-center mt-4"}>
                Our Services
            </h1>
            <h1 className={"text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white text-center mt-4"}>
                See our Work
            </h1>
            </div>
        </section>
    );
}