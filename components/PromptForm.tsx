
import React from 'react';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your vision... a surrealist landscape, a cubist portrait..."
          className="w-full h-28 p-4 pr-40 bg-gray-800 border-2 border-gray-600 rounded-lg text-brand-light placeholder-gray-500 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-300 resize-none"
          disabled={isLoading}
        />
        <button
          onClick={onSubmit}
          disabled={isLoading || !prompt.trim()}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md shadow-lg hover:bg-amber-300 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-400"
        >
          {isLoading ? 'Creating...' : 'Generate'}
        </button>
      </div>
    </div>
  );
};
