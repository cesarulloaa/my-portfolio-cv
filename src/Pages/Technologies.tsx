
import { Code2, Database, Server, Cpu } from 'lucide-react';

export default function TechSection() {
  const technologies = [
    { name: 'React', icon: Code2, color: 'bg-blue-500', delay: 0 },
    { name: 'Node.js', icon: Server, color: 'bg-green-600', delay: 0.2 },
    { name: 'Express', icon: Server, color: 'bg-gray-700', delay: 0.4 },
    { name: 'JavaScript', icon: Code2, color: 'bg-yellow-400', delay: 0.6 },
    { name: 'Java Spring', icon: Database, color: 'bg-green-500', delay: 0.8 },
    { name: 'C# ASP.NET', icon: Cpu, color: 'bg-purple-600', delay: 1 }
  ];

  return (
    <section className="py-20 bg-gradient-cover px-4 sm:px-6 lg:px-8" id="technologies">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900">
          Tecnologías
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-primary">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-4 group"
                  style={{
                    animation: `float 3s ease-in-out infinite`,
                    animationDelay: `${tech.delay}s`
                  }}
                >
                  <div className={`${tech.color} p-6 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-gray-800">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}