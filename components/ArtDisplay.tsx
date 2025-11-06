
import React from 'react';
import { Loader } from './Loader';
import { PaintBrushIcon } from './icons/PaintBrushIcon';

interface ArtDisplayProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
}

export const ArtDisplay: React.FC<ArtDisplayProps> = ({ image, isLoading, error }) => {
  return (
    <div className="w-full aspect-square bg-gray-900 rounded-lg border-2 border-dashed border-gray-700 flex items-center justify-center p-4 transition-all duration-300">
      {isLoading && (
        <div className="text-center space-y-4">
          <Loader />
          <p className="text-brand-gold font-serif">The digital canvas is being painted...</p>
        </div>
      )}
      {error && !isLoading && (
        <div className="text-center text-red-400">
          <p className="font-bold text-lg">An Error Occurred</p>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && image && (
        <div className="w-full h-full p-2 bg-black rounded-md shadow-2xl">
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="Generated artwork"
            className="w-full h-full object-contain rounded"
          />
        </div>
      )}
      {!isLoading && !error && !image && (
         <div className="text-center text-gray-500 space-y-4">
            <PaintBrushIcon className="w-16 h-16 mx-auto" />
            <h2 className="text-2xl font-serif text-gray-400">Your Masterpiece Awaits</h2>
            <p>Describe your artistic vision above and watch it come to life.</p>
        </div>
      )}
    </div>
  );
};
