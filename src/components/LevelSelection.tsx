import React from 'react';
import { LevelCard } from './LevelCard';
import { QuizLevel } from '../types/quiz';

interface LevelSelectionProps {
  onSelectLevel: (level: QuizLevel) => void;
}

export function LevelSelection({ onSelectLevel }: LevelSelectionProps) {
  const levels = [
    {
      title: 'Beginner Level',
      level: 'beginner' as QuizLevel,
      ageRange: 'Ages 6-9',
      description: 'Start your journey with fun, simple questions about basic rights.',
      icon: 'beginner' as const,
    },
    {
      title: 'Intermediate Level',
      level: 'intermediate' as QuizLevel,
      ageRange: 'Ages 10-12',
      description: 'Explore more complex scenarios and learn about your responsibilities.',
      icon: 'intermediate' as const,
    },
    {
      title: 'Advanced Level',
      level: 'advanced' as QuizLevel,
      ageRange: 'Ages 13+',
      description: 'Challenge yourself with detailed questions about rights and laws.',
      icon: 'advanced' as const,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Level</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level) => (
            <LevelCard
              key={level.title}
              {...level}
              onClick={() => onSelectLevel(level.level)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}