import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Quzzzz-Plzzzzz!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
          Explore this interactive extension of our main app, Learn Your Rights, your rights fun and engaging for kids and families alike.
          </p>
          <button 
            onClick={onStartQuiz}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
          >
            Start Quiz
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3')] bg-cover bg-center" />
      </div>
    </div>
  );
}