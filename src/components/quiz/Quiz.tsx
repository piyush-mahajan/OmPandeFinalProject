import React, { useState, useEffect } from 'react';
import { questions } from '../../data/questions';
import { QuizQuestion } from './QuizQuestion';
import { QuizProgress } from './QuizProgress';
import { QuizReportCard } from './QuizReport';
import { QuizState, QuizLevel } from '../../types/quiz';
import { generateQuizReport } from '../../utils/quizUtils';

interface QuizProps {
  selectedLevel: QuizLevel;
}

export function Quiz({ selectedLevel }: QuizProps) {
  const levelQuestions = questions.filter(q => q.level === selectedLevel);

  // Guard against no questions for the selected level
  if (levelQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No questions available</h2>
          <p className="text-gray-600">Please try another difficulty level</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const [startTime] = useState(Date.now());
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: {},
    isComplete: false,
    selectedLevel,
    totalCorrect: 0
  });

  const [showFeedback, setShowFeedback] = useState(false);
  const currentQuestion = levelQuestions[quizState.currentQuestionIndex];

  const handleSelectAnswer = (answer: string) => {
    if (!currentQuestion) return;

    setQuizState(prev => ({
      ...prev,
      answers: { ...prev.answers, [currentQuestion.id]: answer }
    }));
    setShowFeedback(true);

    setTimeout(() => {
      const isCorrect = answer === currentQuestion.correctAnswer;
      setQuizState(prev => ({
        ...prev,
        score: isCorrect ? prev.score + 10 : prev.score,
        totalCorrect: isCorrect ? prev.totalCorrect + 1 : prev.totalCorrect,
        currentQuestionIndex: 
          prev.currentQuestionIndex < levelQuestions.length - 1 
            ? prev.currentQuestionIndex + 1 
            : prev.currentQuestionIndex,
        isComplete: prev.currentQuestionIndex === levelQuestions.length - 1,
      }));
      setShowFeedback(false);
    }, 2000);
  };

  if (quizState.isComplete) {
    const report = generateQuizReport(
      quizState.score,
      levelQuestions.length,
      quizState.totalCorrect,
      (Date.now() - startTime) / 1000,
      selectedLevel
    );

    return (
      <QuizReportCard
        report={report}
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <QuizProgress 
          currentQuestion={quizState.currentQuestionIndex + 1}
          totalQuestions={levelQuestions.length}
          score={quizState.score}
        />
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={quizState.answers[currentQuestion.id]}
          onSelectAnswer={handleSelectAnswer}
          showFeedback={showFeedback}
        />
      </div>
    </div>
  );
}