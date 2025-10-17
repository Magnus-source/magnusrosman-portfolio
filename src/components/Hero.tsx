const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main title */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-none mb-8 animate-fade-in text-white">
            <span className="block">MAGNUS</span>
            <span className="block">RÖSMAN</span>
          </h1>
          
          {/* Subtitle with line */}
          <div className="flex items-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-px bg-white w-20" />
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide uppercase text-white/90">
              Film Director
            </p>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToWork}
            className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
            <div className="w-8 h-12 border-2 border-current rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
