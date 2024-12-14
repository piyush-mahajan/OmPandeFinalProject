import React from 'react';
import { Star, Users, Brain } from 'lucide-react';

interface LevelCardProps {
  title: string;
  ageRange: string;
  description: string;
  icon: 'beginner' | 'intermediate' | 'advanced';
  onClick: () => void;
}

const icons = {
  beginner: Star,
  intermediate: Users,
  advanced: Brain,
};

export function LevelCard({ title, ageRange, description, icon, onClick }: LevelCardProps) {
  const Icon = icons[icon];
  
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{ageRange}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}