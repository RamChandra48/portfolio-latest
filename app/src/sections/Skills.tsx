import { useEffect, useRef, useState } from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'GPT-4', 'LLaMA 2', 'LangChain', 'RAG', 'Semantic Search', 'XGBoost', 'scikit-learn', 'ONNX', 'TensorRT'],
    color: '#00f0ff',
  },
  {
    name: 'Programming & Data',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'PySpark', 'Pandas', 'Kafka', 'Airflow'],
    color: '#8b5cf6',
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'S3', 'SageMaker', 'Glue', 'Docker', 'Kubernetes', 'FastAPI', 'Flask', 'Spring Boot', 'CI/CD'],
    color: '#ff00a0',
  },
  {
    name: 'Databases & Vector Stores',
    skills: ['PostgreSQL', 'MongoDB', 'Pinecone', 'FAISS', 'Weaviate', 'Redshift', 'Snowflake'],
    color: '#ffd700',
  },
  {
    name: 'Monitoring & MLOps',
    skills: ['MLflow', 'Prometheus', 'Grafana', 'Kubeflow', 'Delta Lake'],
    color: '#00f0ff',
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
      id="skills"
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
            Skills
          </span>
          <h2
            className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p
            className={`mt-4 text-[#a0a0b0] max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A comprehensive toolkit built over 5+ years of building production-grade AI systems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`glass-card p-6 glow-border transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}` }}
                />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: category.color }}
                >
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`skill-badge transition-all duration-300 ${
                      hoveredSkill === skill ? 'scale-110' : ''
                    }`}
                    style={{
                      backgroundColor: hoveredSkill === skill ? `${category.color}30` : `${category.color}15`,
                      borderColor: hoveredSkill === skill ? category.color : `${category.color}30`,
                      color: category.color,
                      animationDelay: `${skillIndex * 50}ms`,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Constellation Visualization */}
        <div
          className={`mt-16 glass-card p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Skill <span className="gradient-text">Constellation</span>
          </h3>
          <SkillConstellation />
        </div>
      </div>
    </section>
  );
};

const SkillConstellation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width - 64;
        canvas.height = 300;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Create nodes for each skill category
    const nodes: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      label: string;
      vx: number;
      vy: number;
    }> = [];

    const colors = ['#00f0ff', '#8b5cf6', '#ff00a0', '#ffd700', '#00f0ff'];
    const labels = skillCategories.map((c) => c.name);

    // Position nodes in a circle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.3;

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      nodes.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        radius: 8,
        color: colors[i],
        label: labels[i],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach((node2) => {
          const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y);
          gradient.addColorStop(0, node1.color + '40');
          gradient.addColorStop(1, node2.color + '40');

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.moveTo(node1.x, node1.y);
          ctx.lineTo(node2.x, node2.y);
          ctx.stroke();
        });
      });

      // Draw and update nodes
      nodes.forEach((node) => {
        // Draw glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        glowGradient.addColorStop(0, node.color + '60');
        glowGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Draw label
        ctx.font = '12px Inter';
        ctx.fillStyle = '#a0a0b0';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.radius + 20);

        // Update position with subtle movement
        node.x += node.vx;
        node.y += node.vy;

        // Keep within bounds
        const margin = 60;
        if (node.x < margin || node.x > canvas.width - margin) node.vx *= -1;
        if (node.y < margin || node.y > canvas.height - margin) node.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full"
      style={{ height: '300px' }}
    />
  );
};

export default Skills;
