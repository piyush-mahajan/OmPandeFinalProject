import { Question, QuizLevel } from '../types/quiz';

export const questions: Question[] = [
  // Beginner Level Questions
  {
    id: 1,
    level: 'beginner',
    type: 'multiple-choice',
    text: "What does it mean to have the 'Right to Play'?",
    options: [
      "You can play games and have fun",
      "You must work every day",
      "Only adults are allowed to play",
      "You can skip school to play"
    ],
    correctAnswer: "You can play games and have fun",
    explanation: "The Right to Play means every child has the right to rest, leisure, and play appropriate to their age."
  },
  {
    id: 2,
    level: 'beginner',
    type: 'multiple-choice',
    text: "What should you do if you feel unsafe?",
    options: [
      "Keep it a secret",
      "Tell a trusted adult",
      "Ignore the feeling",
      "Run away without telling anyone"
    ],
    correctAnswer: "Tell a trusted adult",
    explanation: "When you feel unsafe, it's important to tell a trusted adult who can help protect you."
  },
  {
    id: 3,
    level: 'beginner',
    type: 'multiple-choice',
    text: "Who should go to school?",
    options: [
      "Only boys",
      "Only children who want to",
      "All children, boys and girls",
      "Only adults"
    ],
    correctAnswer: "All children, boys and girls",
    explanation: "The Right to Education ensures all children, regardless of gender, have the opportunity to attend school."
  },
  {
    id: 4,
    level: 'beginner',
    type: 'multiple-choice',
    text: "What does it mean to have the 'Right to Health'?",
    options: [
      "To eat junk food every day",
      "To have doctors and medicine when needed",
      "To skip exercise",
      "To not care about staying healthy"
    ],
    correctAnswer: "To have doctors and medicine when needed",
    explanation: "The Right to Health ensures children have access to healthcare and necessities like clean water and nutritious food."
  },
  {
    id: 5,
    level: 'beginner',
    type: 'multiple-choice',
    text: "What should you do if someone asks you to do something unsafe?",
    options: [
      "Say 'No' and tell an adult",
      "Do what they say to avoid trouble",
      "Pretend you didn’t hear them",
      "Keep it a secret"
    ],
    correctAnswer: "Say 'No' and tell an adult",
    explanation: "If asked to do something unsafe, saying 'No' and informing a trusted adult is the best way to stay safe."
  },
  {
    id: 6,
    level: 'beginner',
    type: 'multiple-choice',
    text: "Which of these is a child’s right?",
    options: [
      "To stay hungry",
      "To have food, water, and shelter",
      "To be punished if you make a mistake",
      "To work instead of going to school"
    ],
    correctAnswer: "To have food, water, and shelter",
    explanation: "The Right to Survival ensures children have the basic necessities of life, like food, water, and shelter."
  },
  {
    id: 7,
    level: 'beginner',
    type: 'multiple-choice',
    text: "Who helps protect children’s rights around the world?",
    options: [
      "Superheroes",
      "UNICEF",
      "Only parents",
      "Nobody"
    ],
    correctAnswer: "UNICEF",
    explanation: "UNICEF works globally to protect children’s rights and improve their well-being."
  },
  {
    id: 8,
    level: 'beginner',
    type: 'multiple-choice',
    text: "If someone hurts your feelings, what can you do?",
    options: [
      "Hurt them back",
      "Tell an adult you trust",
      "Ignore them forever",
      "Stop going to school"
    ],
    correctAnswer: "Tell an adult you trust",
    explanation: "If someone hurts your feelings, talking to a trusted adult can help resolve the situation."
  },
  {
    id: 9,
    level: 'beginner',
    type: 'true-false',
    text: "True or False: You have the right to be treated with respect no matter who you are.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Every child deserves to be treated with respect, regardless of their background or differences."
  },
  {
    id: 10,
    level: 'beginner',
    type: 'multiple-choice',
    text: "What should you do if you see a friend being bullied?",
    options: [
      "Join the bullying",
      "Stay quiet",
      "Help your friend and tell an adult",
      "Laugh and walk away"
    ],
    correctAnswer: "Help your friend and tell an adult",
    explanation: "If you see someone being bullied, helping them and informing a trusted adult can stop the bullying."
  },
  // Add all beginner questions here...

  // Intermediate Level Questions
  {
    id: 11,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "What does the 'Right to Education' mean?",
    options: [
      "Only smart children can go to school",
      "Every child has the right to learn",
      "Only rich children can attend school",
      "Only adults need education"
    ],
    correctAnswer: "Every child has the right to learn",
    explanation: "Education is a fundamental right for all children, regardless of their abilities or background."
  },
  {
    id: 12,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "If you see a child working in a factory instead of going to school, what can you do?",
    options: [
      "Ignore it",
      "Tell an adult or report to an authority",
      "Make fun of the child",
      "Ask them to continue working"
    ],
    correctAnswer: "Tell an adult or report to an authority",
    explanation: "If you see a child being exploited or forced to work instead of going to school, you should inform a trusted adult or report it to the authorities to help them."
  },
  {
    id: 13,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "What is your 'Right to Protection' about?",
    options: [
      "Being safe from harm or danger",
      "Wearing a helmet while biking",
      "Only listening to parents",
      "Playing without rules"
    ],
    correctAnswer: "Being safe from harm or danger",
    explanation: "The Right to Protection means that all children should be kept safe from harm and violence."
  },
  {
    id: 14,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "If your teacher says you can’t speak your language at school, what should you do?",
    options: [
      "Stop speaking your language",
      "Tell a trusted adult or principal",
      "Ignore it",
      "Never go to school again"
    ],
    correctAnswer: "Tell a trusted adult or principal",
    explanation: "Every child has the right to use their own language. If your rights are not being respected, talk to a trusted adult or the school principal."
  },
  {
    id: 15,
    level: 'intermediate',
    type: 'true-false',
    text: "True or False: Boys and girls have the same rights.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Boys and girls, regardless of gender, have the same rights under international human rights law."
  },
  {
    id: 16,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "What should you do if you see someone treating a child unfairly?",
    options: [
      "Stand up for them or tell an adult",
      "Join in and treat them unfairly too",
      "Stay quiet and do nothing",
      "Tell the child to stop complaining"
    ],
    correctAnswer: "Stand up for them or tell an adult",
    explanation: "If you see someone being treated unfairly, it's important to speak up or tell an adult who can help resolve the situation."
  },
  {
    id: 17,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "Which of these is NOT a child’s right?",
    options: [
      "The right to work long hours",
      "The right to play",
      "The right to health care",
      "The right to protection from harm"
    ],
    correctAnswer: "The right to work long hours",
    explanation: "Children should not be made to work for long hours. Instead, they have the right to play, go to school, and receive health care."
  },
  {
    id: 18,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "What can you do if someone doesn’t listen to your opinions?",
    options: [
      "Accept it quietly",
      "Stop talking to them",
      "Speak up politely or tell an adult",
      "Yell at them"
    ],
    correctAnswer: "Speak up politely or tell an adult",
    explanation: "If someone doesn’t listen to your opinions, it's important to speak up respectfully or talk to a trusted adult."
  },
  {
    id: 19,
    level: 'intermediate',
    type: 'multiple-choice',
    text: "Which of these is part of the 'Right to Participation'?",
    options: [
      "You can share your opinions and ideas",
      "You must always agree with adults",
      "Only adults can make decisions",
      "You don’t have a say in what happens to you"
    ],
    correctAnswer: "You can share your opinions and ideas",
    explanation: "The Right to Participation means children can express their opinions and take part in decisions that affect them."
  },
  {
    id: 20,
    level: 'intermediate',
    type: 'true-false',
    text: "True or False: If your parents can’t take care of you, someone else must make sure you are safe and happy.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "If parents are unable to care for a child, the government or a trusted adult has the responsibility to ensure the child’s safety and well-being."
  },
  // Add all intermediate questions here...

  // Advanced Level Questions
  {
    id: 21,
    level: 'advanced',
    type: 'multiple-choice',
    text: "If a school only allows boys to study, what can you do?",
    options: [
      "Protest peacefully or talk to someone in charge",
      "Ignore it",
      "Stop girls from trying to study",
      "Do nothing, because that's normal"
    ],
    correctAnswer: "Protest peacefully or talk to someone in charge",
    explanation: "Gender discrimination in education is wrong. It's important to speak up and take action for equal rights."
  },
  {
    id: 22,
    level: 'advanced',
    type: 'true-false',
    text: "You should report to an adult if a child is treated unfairly, even if you don’t know them.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "It’s essential to report unfair treatment to ensure children’s rights are protected, even if you don't personally know the child."
  },
  {
    id: 23,
    level: 'advanced',
    type: 'multiple-choice',
    text: "What does 'Right to Freedom of Expression' mean?",
    options: [
      "You can say your thoughts and feelings politely",
      "You can say anything, even if it hurts others",
      "Only adults can express their feelings",
      "You must stay silent all the time"
    ],
    correctAnswer: "You can say your thoughts and feelings politely",
    explanation: "The Right to Freedom of Expression allows individuals to express their thoughts and feelings in a respectful manner."
  },
  {
    id: 24,
    level: 'advanced',
    type: 'multiple-choice',
    text: "A child is not being fed at home and looks very weak. What is the best action?",
    options: [
      "Ignore it because it’s not your problem",
      "Tell a teacher or a trusted adult immediately",
      "Offer them your food and do nothing else",
      "Make fun of the child"
    ],
    correctAnswer: "Tell a teacher or a trusted adult immediately",
    explanation: "When a child’s well-being is at risk, it's important to report the situation to a responsible adult who can take action."
  },
  {
    id: 25,
    level: 'advanced',
    type: 'true-false',
    text: "Children have the right to be protected from harmful work, even if their family is poor.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Children must be protected from harmful work regardless of their family's financial situation."
  },
  {
    id: 26,
    level: 'advanced',
    type: 'multiple-choice',
    text: "Why is the 'Right to Participation' important?",
    options: [
      "Because children’s opinions matter",
      "So children can argue with adults",
      "To force children to talk all the time",
      "To ignore what children think"
    ],
    correctAnswer: "Because children’s opinions matter",
    explanation: "The Right to Participation ensures children’s opinions are valued and considered in decisions that affect them."
  },
  {
    id: 27,
    level: 'advanced',
    type: 'multiple-choice',
    text: "If you were asked to work instead of going to school, what should you do?",
    options: [
      "Accept it to help your family",
      "Say no and tell a trusted adult or authority",
      "Work quietly without complaining",
      "Quit school forever"
    ],
    correctAnswer: "Say no and tell a trusted adult or authority",
    explanation: "Children have the right to education and should not be made to work at the expense of their schooling."
  },
  {
    id: 28,
    level: 'advanced',
    type: 'multiple-choice',
    text: "What is a responsibility you have as a child?",
    options: [
      "To respect other children’s rights",
      "To ignore rules",
      "To work hard and skip playtime",
      "To never speak up for yourself"
    ],
    correctAnswer: "To respect other children’s rights",
    explanation: "As a child, it’s important to respect the rights of others and stand up for fairness and equality."
  },
  {
    id: 29,
    level: 'advanced',
    type: 'multiple-choice',
    text: "A child is being yelled at by a shopkeeper for no reason. What would you do?",
    options: [
      "Comfort the child and report it to an adult",
      "Stay quiet",
      "Join in yelling",
      "Laugh at the situation"
    ],
    correctAnswer: "Comfort the child and report it to an adult",
    explanation: "If you witness mistreatment, it's important to support the child and inform an adult who can address the issue."
  },
  {
    id: 30,
    level: 'advanced',
    type: 'true-false',
    text: "Children have the right to enjoy their culture, religion, and language.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Children have the right to express and enjoy their cultural, religious, and linguistic identity."
  }
  // Add all advanced questions here...
];