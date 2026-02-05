import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  image: string;
  links: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    title: 'Healthcare RAG System',
    description: 'AI-driven patient record summarization using RAG architecture with GPT-4 and LLaMA 2 integration.',
    impact: '45% reduction in manual chart review time',
    tech: ['GPT-4', 'LangChain', 'Pinecone', 'FastAPI', 'React'],
    image: '/project-healthcare.jpg',
    links: [
      { label: 'Live Demo', url: '#' },
      { label: 'GitHub', url: 'https://github.com/Ramchandra48' },
    ],
  },
  {
    title: 'Real-time Fraud Detection',
    description: 'ML-powered transaction scoring system with sub-2s latency for enhanced security.',
    impact: '67% faster response times, enhanced compliance',
    tech: ['Java Spring Boot', 'Kafka', 'PostgreSQL', 'XGBoost'],
    image: '/project-fraud.jpg',
    links: [
      { label: 'Case Study', url: '#' },
      { label: 'GitHub', url: 'https://github.com/Ramchandra48' },
    ],
  },
  {
    title: 'Document Intelligence Platform',
    description: 'Semantic search across 20M+ medical records with vector embeddings and FAISS.',
    impact: '<200ms retrieval latency for clinicians',
    tech: ['LLaMA 2', 'FAISS', 'AWS Glue', 'Apache Airflow'],
    image: '/project-document.jpg',
    links: [
      { label: 'Demo', url: '#' },
      { label: 'Architecture', url: '#' },
    ],
  },
  {
    title: 'MLOps Pipeline Automation',
    description: 'End-to-end ML lifecycle management with automated retraining and deployment.',
    impact: '50% faster deployment, 35% shorter iteration cycles',
    tech: ['Kubeflow', 'MLflow', 'SageMaker', 'TensorRT'],
    image: '/project-mlops.jpg',
    links: [
      { label: 'Documentation', url: '#' },
      { label: 'GitHub', url: 'https://github.com/ram-chandra17' },
    ],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`section-label transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Projects
          </span>
          <h2
            className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p
            className={`mt-4 text-[#a0a0b0] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Production-grade systems that delivered measurable impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass-card overflow-hidden glow-border h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                  
                  {/* Impact Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1.5 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff]/30">
                      <span className="text-xs font-medium text-[#00f0ff]">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[#a0a0b0] text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#a0a0b0] hover:text-[#00f0ff] transition-colors duration-300 group/link"
                      >
                        {link.label === 'GitHub' ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="https://github.com/Ramchandra48"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
