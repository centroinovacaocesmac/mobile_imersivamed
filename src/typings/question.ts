export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

export interface FirebaseQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}