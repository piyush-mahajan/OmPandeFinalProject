import React from 'react';
import { Question } from '../../types/quiz';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: string | undefined;
  onSelectAnswer: (answer: string) => void;
  showFeedback: boolean;
}

export function QuizQuestion({ 
  question, 
  selectedAnswer, 
  onSelectAnswer, 
  showFeedback 
}: QuizQuestionProps) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = showFeedback && option === question.correctAnswer;
          const isWrong = showFeedback && isSelected && option !== question.correctAnswer;

          return (
            <button
              key={index}
              onClick={() => !showFeedback && onSelectAnswer(option)}
              disabled={showFeedback}
              className={`w-full text-left p-4 rounded-lg flex items-center justify-between
                ${isSelected ? 'border-2' : 'border'}
                ${isCorrect ? 'bg-green-50 border-green-500' : 
                  isWrong ? 'bg-red-50 border-red-500' :
                  isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}
                transition-all duration-200`}
            >
              <span className="flex-1">{option}</span>
              {showFeedback && isCorrect && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              )}
              {showFeedback && isWrong && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </button>
          );
        })}
      </div>
      {showFeedback && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}