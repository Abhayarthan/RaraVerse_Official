
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { ArtDisplay } from './components/ArtDisplay';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageB64 = await generateImage(prompt);
      setGeneratedImage(imageB64);
    } catch (err) {
      console.error(err);
      setError('Failed to create masterpiece. The digital muses are resting. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col antialiased">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl space-y-8">
          <PromptForm
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
          <ArtDisplay
            image={generatedImage}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>Powered by Gemini. Crafted for the modern visionary.</p>
      </footer>
    </div>
  );
};

export default App;
