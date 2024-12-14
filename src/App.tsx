import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LevelSelection } from './components/LevelSelection';
import { Quiz } from './components/quiz/Quiz';
import { QuizLevel } from './types/quiz';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel | null>(null);

  if (quizStarted && selectedLevel) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <Quiz selectedLevel={selectedLevel} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero onStartQuiz={() => setQuizStarted(true)} />
        <LevelSelection 
          onSelectLevel={(level) => {
            setSelectedLevel(level as QuizLevel);
            setQuizStarted(true);
          }} 
        />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-400">
                Dedicated to educating children about their rights through interactive learning.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Parent Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-gray-400">
                Have questions? Reach out to us at support@learnrights.edu
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;