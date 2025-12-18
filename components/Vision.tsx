
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 w-full">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <blockquote className="relative p-8 border border-gray-100/10 rounded-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 blur-3xl -z-10"></div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white">
            "Tecnologia não é suporte. É estratégia, eficiência e sustentabilidade operacional."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default Vision;
