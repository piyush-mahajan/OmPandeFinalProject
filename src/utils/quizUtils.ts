import { QuizLevel, QuizReport } from '../types/quiz';

export function generateQuizReport(
  score: number,
  totalQuestions: number,
  correctAnswers: number,
  timeSpent: number,
  level: QuizLevel
): QuizReport {
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;
  const suggestions: string[] = [];

  // Level-specific suggestions
  if (level === 'beginner') {
    if (percentage < 50) {
      suggestions.push(
        "Take your time reading each question carefully",
        "Remember that every child has basic rights like education and safety",
        "Try watching educational videos about children's rights"
      );
    } else if (percentage < 80) {
      suggestions.push(
        "You're doing great! Keep learning about your rights",
        "Practice explaining your rights to friends and family",
        "Try some more questions to become even better"
      );
    } else {
      suggestions.push(
        "Excellent work! You understand your basic rights very well",
        "You're ready to try the intermediate level",
        "Help teach other children about their rights"
      );
    }
  } else if (level === 'intermediate') {
    if (percentage < 50) {
      suggestions.push(
        "Review the basic rights concepts again",
        "Try solving some beginner level questions first",
        "Focus on understanding real-life situations"
      );
    } else if (percentage < 80) {
      suggestions.push(
        "Good job! You're understanding more complex situations",
        "Practice applying rights in different scenarios",
        "Learn more about organizations that protect children's rights"
      );
    } else {
      suggestions.push(
        "Great work! You have a strong grasp of children's rights",
        "You're ready for the advanced level",
        "Start thinking about how you can help protect others' rights"
      );
    }
  } else {
    if (percentage < 50) {
      suggestions.push(
        "Try the intermediate level questions first",
        "Focus on understanding complex scenarios",
        "Learn more about children's rights laws and organizations"
      );
    } else if (percentage < 80) {
      suggestions.push(
        "You're doing well with complex situations",
        "Learn more about global children's rights initiatives",
        "Practice critical thinking about rights violations"
      );
    } else {
      suggestions.push(
        "Outstanding! You're a children's rights expert",
        "Consider teaching others about children's rights",
        "Learn about becoming a children's rights advocate"
      );
    }
  }

  return {
    score,
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    timeSpent,
    level,
    suggestions,
    percentage
  };
}