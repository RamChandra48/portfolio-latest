import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Molina Healthcare',
    role: 'Software AI Engineer',
    period: 'April 2025 - Present',
    location: 'USA',
    achievements: [
      'Developed AI-driven RAG models to summarize patient health records, reducing manual chart review time by 45%',
      'Integrated GPT-4 and LLaMA 2 with internal EHR dashboards using LangChain, FastAPI, and React',
      'Built a secure document search system using Pinecone and FAISS for 20M+ records, achieving <200ms latency',
      'Automated FHIR API and HL7 data ingestion via Apache Airflow and AWS Glue, increasing pipeline reliability by 30%',
      'Implemented model observability with Prometheus and Grafana for compliance reporting',
      'Designed model retraining workflows using MLflow, SageMaker, and TensorRT, shortening iteration cycles by 35%',
    ],
  },
  {
    company: 'First Tennessee Bank',
    role: 'Software Developer',
    period: 'Jan 2024 - April 2025',
    location: 'USA',
    achievements: [
      'Optimized a fraud detection module by batching transaction scoring requests, reducing response time from 4.8s to 1.6s',
      'Converted Python scripts to Java Spring Boot microservices with Kafka streaming and PostgreSQL backend',
      'Reduced ML inference time by 60% by profiling bottlenecks and moving models to persistent in-memory cache',
      'Implemented Kubeflow pipelines for ML lifecycle orchestration, reducing model deployment lead time by 50%',
      'Built real-time Grafana dashboards for suspicious transactions, enhancing compliance team visibility',
    ],
  },
  {
    company: 'Virtusa',
    role: 'Software Developer',
    period: 'June 2019 - July 2022',
    location: 'Remote',
    achievements: [
      'Worked on a React.js dashboard module to track certification progress, improving page load by 25%',
      'Reworked Spring Boot APIs for certification validation, reducing failed certificate issuance from 15% to near zero',
      'Wrote automated BDD test cases in C# (SpecFlow), catching data inconsistencies before release',
      'Tested integrations with third-party LMS providers using Postman and monitored deployments via Kubernetes CI/CD',
      'Tuned SQL queries and indexing for certification reports, cutting generation time from 18s to under 6s',
    ],
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
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
      id="experience"
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
            Experience
          </span>
          <h2
            className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            My Professional{' '}
            <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff] via-[#8b5cf6] to-[#ff00a0] hidden sm:block" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          className={`mt-16 glass-card p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#00f0ff]/10">
                <Briefcase className="w-5 h-5 text-[#00f0ff]" />
              </div>
              <div>
                <div className="font-semibold text-white">Master of Science in Computer Science</div>
                <div className="text-[#a0a0b0]">George Mason University</div>
                <div className="text-sm text-[#606070] mt-1">GPA: 3.7</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#8b5cf6]/10">
                <Briefcase className="w-5 h-5 text-[#8b5cf6]" />
              </div>
              <div>
                <div className="font-semibold text-white">Bachelor of Science in Computer Science</div>
                <div className="text-[#a0a0b0]">Jawaharlal Nehru Technological University</div>
                <div className="text-sm text-[#606070] mt-1">GPA: 3.8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isVisible: boolean;
}

const ExperienceCard = ({
  experience,
  index,
  isExpanded,
  onToggle,
  isVisible,
}: ExperienceCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute top-6 w-4 h-4 rounded-full bg-[#00f0ff] border-4 border-[#0a0a0f] hidden sm:block ${
          isEven ? 'lg:left-1/2 lg:-translate-x-1/2' : 'lg:left-1/2 lg:-translate-x-1/2'
        }`}
        style={{ left: '14px' }}
      />

      {/* Content */}
      <div
        className={`sm:ml-12 lg:ml-0 ${
          isEven ? 'lg:mr-[50%] lg:pr-12' : 'lg:ml-[50%] lg:pl-12'
        }`}
      >
        <div
          className="glass-card p-6 cursor-pointer glow-border transition-all duration-300 hover:translate-y-[-2px]"
          onClick={onToggle}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">{experience.company}</h3>
              <div className="text-[#00f0ff] font-medium mt-1">{experience.role}</div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#606070]">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {experience.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div
            className={`mt-4 overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="space-y-3 pt-4 border-t border-[#00f0ff]/10">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 text-[#a0a0b0]">
                  <ChevronRight className="w-5 h-5 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expand Indicator */}
          <div className="mt-4 flex items-center justify-center">
            <div
              className={`w-8 h-1 rounded-full transition-all duration-300 ${
                isExpanded ? 'bg-[#00f0ff] w-12' : 'bg-[#606070]/30'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
