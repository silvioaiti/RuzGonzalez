
import React from 'react';
import { DataIcon } from './icons/DataIcon';
import { TechIcon } from './icons/TechIcon';
import { SocietyIcon } from './icons/SocietyIcon';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start p-6 border border-gray-100/10 rounded-lg bg-gray-900/20 transition-all duration-300 hover:bg-gray-800/30">
    <div className="mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Pillars: React.FC = () => {
  const pillarsData = [
    {
      icon: <DataIcon className="w-8 h-8"/>,
      title: "Liderança Orientada a Dados",
      description: "Decisões estratégicas baseadas em análise e inteligência de dados para máxima performance."
    },
    {
      icon: <TechIcon className="w-8 h-8"/>,
      title: "Tecnologia como Vantagem Competitiva",
      description: "Implementação de tecnologias disruptivas para otimizar processos e criar novas oportunidades."
    },
    {
      icon: <SocietyIcon className="w-8 h-8"/>,
      title: "Impacto Real na Sociedade",
      description: "Foco em projetos que geram valor sustentável e melhoram a qualidade de vida da comunidade."
    }
  ];

  return (
    <section className="py-20 lg:py-32 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Pensamento Estratégico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillarsData.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
