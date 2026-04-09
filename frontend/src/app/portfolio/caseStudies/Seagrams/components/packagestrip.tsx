import styles from "./packagestrip.module.css";

export default function SeagramsPackageStrip() {
  return (
    <section className="relative bg-black py-6 md:py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-black to-transparent md:h-16 lg:h-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-black to-transparent md:h-16 lg:h-20" />
      <div className="relative z-[1] overflow-hidden">
        <div className={`${styles.track} flex w-max`}>
          <img
            src="/assets/Seagrams/package_scroll.png"
            alt="Seagram's package strip"
            className="h-auto w-[clamp(1440px,125vw,2200px)] shrink-0 object-cover"
          />
          <img
            src="/assets/Seagrams/package_scroll.png"
            alt=""
            aria-hidden
            className="h-auto w-[clamp(1440px,125vw,2200px)] shrink-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
