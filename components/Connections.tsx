
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

const Connections: React.FC = () => {
  return (
    <footer className="py-20 w-full border-t border-gray-100/10 mt-16">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Conecte-se
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Acompanhe insights sobre liderança, tecnologia e os bastidores de operações de grande impacto.
        </p>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cyan-400/50 bg-cyan-400/10 text-cyan-300 rounded-lg hover:bg-cyan-400/20 hover:border-cyan-400/80 transition-all duration-300"
        >
          <InstagramIcon className="w-5 h-5" />
          Seguir no Instagram
        </a>
        <p className="text-sm text-gray-600 mt-12">
          &copy; {new Date().getFullYear()} Ruz Gonzalez. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Connections;
