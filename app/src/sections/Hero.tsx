import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20M+', label: 'Records Processed' },
    { value: '45%', label: 'Efficiency Gains' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="section-label mb-4 block">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight gradient-text animate-gradient-shift">
                Ram Chandra
              </span>
            </h1>

            {/* Title */}
            <div
              className={`mt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                Software & AI Engineer
              </span>
            </div>

            {/* Tagline */}
            <p
              className={`mt-6 text-lg text-[#a0a0b0] max-w-xl mx-auto lg:mx-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Building intelligent systems that transform healthcare and finance.
              Specializing in LLMs, RAG architectures, and production-grade AI pipelines.
            </p>

            {/* Stats */}
            <div
              className={`mt-8 flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#606070] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`mt-8 flex justify-center lg:justify-start gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1400ms' }}
            >
              <a
                href="https://github.com/Ramchandra48"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#12121a] border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ram-chandra17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#12121a] border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rc.ramaraju17@gmail.com"
                className="p-3 rounded-lg bg-[#12121a] border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/30 via-[#8b5cf6]/20 to-[#ff00a0]/30 rounded-3xl blur-3xl animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#00f0ff]/20">
                <img
                  src="/hero-visual.jpg"
                  alt="AI Neural Network Visualization"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00f0ff]" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#00f0ff]" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#00f0ff]" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#00f0ff]" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#00f0ff] animate-pulse" />
                  <span className="text-sm font-medium text-white">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1600ms' }}
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-[#606070] hover:text-[#00f0ff] transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
