import React from 'react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

export function QuizProgress({ currentQuestion, totalQuestions, score }: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-blue-600">
          Score: {score}
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}