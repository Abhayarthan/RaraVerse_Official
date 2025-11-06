import React from 'react';
import { PaintBrushIcon } from './icons/PaintBrushIcon';

export const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-gray-700">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-3">
        <PaintBrushIcon className="w-8 h-8 text-brand-gold" />
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wider">
          RaraVerse
        </h1>
      </div>
    </header>
  );
};