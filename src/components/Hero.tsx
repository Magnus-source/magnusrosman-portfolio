const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-end justify-start relative overflow-hidden bg-black"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — stronger at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      {/* Content — bottom, aligned with CategoryFilter */}
      <div className="relative z-10 w-full pb-16 md:pb-20">
        <div className="container mx-auto px-8 md:px-14">
        <h1 className="font-display font-normal text-[7.4vw] sm:text-[6.4vw] md:text-[5.4vw] lg:text-[4.9vw] leading-none text-white mb-6 tracking-wide">
          Magnus Rösman
        </h1>

        <div className="flex items-center gap-5">
          <div className="w-10 h-px bg-white/40" />
          <p className="text-xs md:text-sm font-light tracking-[0.35em] uppercase text-white/60">
            Film Director
          </p>
        </div>

        <button
          onClick={scrollToWork}
          className="mt-12 flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors duration-300 group"
          aria-label="Scroll to work"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Explore work</span>
          <svg
            className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
