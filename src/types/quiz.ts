export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  level: QuizLevel;
  type: 'multiple-choice' | 'true-false' | 'situational';
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<number, string>;
  isComplete: boolean;
  selectedLevel: QuizLevel;
  totalCorrect: number;
}

export interface QuizReport {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: number;
  level: QuizLevel;
  suggestions: string[];
  percentage: number;
}