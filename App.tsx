import React from 'react';
import { Component as LuminaSlider } from './components/ui/lumina-interactive-list';

export default function App() {
  return (
    <div className="w-full h-screen relative bg-black">
       {/* Ensure the slider takes full viewport */}
       <LuminaSlider />
       
       {/* Overlay generic UI for context if needed, though the slider is self-contained */}
       <div className="absolute top-6 left-6 z-50 pointer-events-none mix-blend-difference text-white/50 font-mono text-xs tracking-widest uppercase">
          Lumina Interactive &copy; 2025
       </div>
    </div>
  );
}