
import React from 'react';

interface CompanyCardProps {
  name: string;
  description: string;
  link: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, description, link }) => (
  <div className="p-8 rounded-2xl bg-gray-500/5 backdrop-blur-xl border border-gray-100/10 shadow-lg hover:border-cyan-400/20 transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
      Saber mais &rarr;
    </a>
  </div>
);

const Companies: React.FC = () => {
  return (
    <section id="empresas" className="py-20 lg:py-32 w-full">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Empresas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CompanyCard 
            name="Inova BH"
            description="Gestão e manutenção de infraestrutura educacional."
            link="#"
          />
          <CompanyCard 
            name="SPE Saúde BH"
            description="Gestão e manutenção de unidades de saúde."
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
