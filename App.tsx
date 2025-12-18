
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Companies from './components/Companies';
import Vision from './components/Vision';
import Pillars from './components/Pillars';
import Connections from './components/Connections';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background futuristic gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[150%] h-[150%] md:w-[100%] md:h-[100%] bg-[radial-gradient(ellipse_at_top,_rgba(20,68,75,0.3),_rgba(0,0,0,0))] opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/0 via-black/50 to-black"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <About />
        <Companies />
        <Vision />
        <Pillars />
        <Connections />
      </main>
    </div>
  );
};

export default App;
