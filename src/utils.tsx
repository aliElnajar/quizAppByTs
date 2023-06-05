export const shuffleArray = (arr: any[]) => arr.sort(() => Math.random() - 0.5);

export type DifficultyLevelType = "easy" | "medium" | "hard";
export type QuestionType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  answers: string[];
};
export type StateType = {
  number: number;
  questions: [] | QuestionType[];
  score: number;
  loading: boolean;
  gameOver: boolean;
  deathMatch: boolean;
};
