export default function Contact() {
  return (
    <section
      className="
        relative w-full min-h-screen flex items-center justify-center
        bg-[url('/AgencyPolaroids.png')] bg-cover bg-center
      "
    >
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 w-1/2 h-1/4 flex flex-col gap-10 items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white text-center">
          Built By Gen Z, For Everyone.
        </h1>
      </div>
    </section>
  );
}