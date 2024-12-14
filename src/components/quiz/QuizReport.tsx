import React from 'react';
import { QuizReport } from '../../types/quiz';
import { Award, Clock, CheckCircle, XCircle, BookOpen } from 'lucide-react';

interface QuizReportProps {
  report: QuizReport;
  onRetry: () => void;
}

export function QuizReportCard({ report, onRetry }: QuizReportProps) {
  const percentage = Math.round((report.score / (report.totalQuestions * 10)) * 100);
  
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <p className="text-gray-600">Here's how you did:</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
          <Award className="h-6 w-6 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Score</p>
            <p className="text-xl font-bold text-gray-800">{percentage}%</p>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
          <Clock className="h-6 w-6 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Time Spent</p>
            <p className="text-xl font-bold text-gray-800">
              {Math.round(report.timeSpent / 60)} mins
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-emerald-600" />
          <div>
            <p className="text-sm text-gray-600">Correct Answers</p>
            <p className="text-xl font-bold text-gray-800">{report.correctAnswers}</p>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg flex items-center gap-3">
          <XCircle className="h-6 w-6 text-red-600" />
          <div>
            <p className="text-sm text-gray-600">Incorrect Answers</p>
            <p className="text-xl font-bold text-gray-800">{report.incorrectAnswers}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          Suggestions for Improvement
        </h3>
        <ul className="space-y-2">
          {report.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span className="text-gray-700">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onRetry}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}