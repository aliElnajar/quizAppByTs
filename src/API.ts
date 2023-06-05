import { shuffleArray, QuestionType } from "./utils";

export const fetchQuestions = async () => {
  const resp = await fetch(
    `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=easy`
  );
  const data = await resp.json();
  return data.results.map((question: QuestionType) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
