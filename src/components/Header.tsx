import React from 'react';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Learn Your Rights</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="text-white hover:text-blue-200 transition">Home</a></li>
            <li><a href="#" className="text-white hover:text-blue-200 transition">About</a></li>
            <li><a href="#" className="text-white hover:text-blue-200 transition">Parent Guide</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}