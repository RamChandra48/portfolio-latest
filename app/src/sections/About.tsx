import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Brain, Cloud } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Brain, value: 50, suffix: '+', label: 'Production Models' },
    { icon: Database, value: 20, suffix: 'M+', label: 'Records Daily' },
    { icon: Code2, value: 60, suffix: '%', label: 'Latency Reduction' },
    { icon: Cloud, value: 30, suffix: '%', label: 'Reliability Boost' },
  ];

  const highlights = [
    '5+ years delivering production-grade AI systems',
    'Expertise in LLMs, RAG, and healthcare AI',
    'Track record of 45% efficiency improvements',
    'Passion for scalable, secure, low-latency solutions',
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            {/* Section Label */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="section-label">About Me</span>
            </div>

            {/* Heading */}
            <h2
              className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Engineering the Future{' '}
              <span className="gradient-text">with AI</span>
            </h2>

            {/* Description */}
            <div
              className={`mt-6 space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-[#a0a0b0] leading-relaxed">
                I'm a Software & AI Engineer with over 5 years of experience building 
                production-grade intelligent systems. My work spans healthcare and finance, 
                where I've deployed LLMs, optimized ML pipelines, and created secure, 
                low-latency data workflows that deliver real business impact.
              </p>
              <p className="text-[#a0a0b0] leading-relaxed">
                At Molina Healthcare, I developed AI-driven RAG models that reduced manual 
                chart review time by 45%. At First Tennessee Bank, I optimized fraud detection 
                systems, cutting response times from 4.8s to 1.6s. I'm passionate about 
                transforming complex data challenges into elegant, scalable solutions.
              </p>
            </div>

            {/* Highlights */}
            <div
              className={`mt-8 space-y-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-[#a0a0b0]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Code Snippet Decoration */}
            <div
              className={`mt-8 glass-card p-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <pre className="code-font text-sm text-[#a0a0b0] overflow-x-auto">
                <code>
                  <span className="text-[#ff00a0]">const</span>{' '}
                  <span className="text-[#00f0ff]">engineer</span> = {'{'}
                  {'\n'}  <span className="text-[#8b5cf6]">passion</span>:{' '}
                  <span className="text-[#ffd700]">'Building AI that matters'</span>,
                  {'\n'}  <span className="text-[#8b5cf6]">location</span>:{' '}
                  <span className="text-[#ffd700]">'San Jose, CA'</span>,
                  {'\n'}  <span className="text-[#8b5cf6]">openTo</span>:{' '}
                  <span className="text-[#ffd700]">'New opportunities'</span>
                  {'\n'}{'}'};
                </code>
              </pre>
            </div>
          </div>

          {/* Visual & Stats */}
          <div className="space-y-8">
            {/* Image */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/about-visual.jpg"
                  alt="AI Code Visualization"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 100}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

const StatCard = ({ icon: Icon, value, suffix, label, delay, isVisible }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      className={`glass-card p-6 glow-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${500 + delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-[#00f0ff]/10">
          <Icon className="w-5 h-5 text-[#00f0ff]" />
        </div>
      </div>
      <div className="text-3xl font-bold gradient-text-cyan">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-[#606070] mt-1">{label}</div>
    </div>
  );
};

export default About;
