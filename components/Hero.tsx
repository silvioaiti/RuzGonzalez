
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Ruz Gonzalez
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 tracking-wider">
          CEO | Estratégia • Tecnologia • Impacto
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-6 py-3 border border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300 w-full sm:w-auto"
          >
            <InstagramIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            Instagram
          </a>
          <a
            href="#empresas"
            className="px-6 py-3 border border-gray-500/30 text-gray-300 rounded-lg hover:bg-gray-500/10 hover:border-gray-500/60 transition-all duration-300 w-full sm:w-auto"
          >
            Empresas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
