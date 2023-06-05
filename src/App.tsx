import { useReducer } from "react";
import { reducerFn, initialState } from "./Reducer";
import { fetchQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import LoadingSpinner from "./components/LoadingSpinner";
import InitialContent from "./components/InitialContent";
function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const { number, questions, score, gameOver, loading, deathMatch } = state;
  const startQuiz = async (deathMatch: boolean) => {
    dispatch({ type: "START_GAME", payload: deathMatch });
    try {
      const questions = await fetchQuestions();
      dispatch({ type: "QUESTIONS_FETCHED", payload: questions });
    } catch (err) {
      console.log(err);
    }
  };
  const gettingAnswerHandler = (answer: string) => {
    const correctAnswer = answer === questions[number].correct_answer;
    if (correctAnswer) {
      dispatch({ type: "USER_ANSWERED_CORRECT" });
    }
    if (number >= 9 || (!correctAnswer && deathMatch)) {
      dispatch({ type: "FINISH_GAME" });
      return;
    }
    dispatch({ type: "USER_ANSWERED" });
  };

  let content = <InitialContent score={score} startQuiz={startQuiz} />;
  if (loading) {
    content = <LoadingSpinner />;
  }
  if (!loading && questions?.length && !gameOver) {
    content = (
      <QuestionCard
        gettingAnswerHandler={gettingAnswerHandler}
        questionNumber={number}
        question={questions[number]?.question}
        answers={questions[number].answers}
      />
    );
  }

  return (
    <div className="w-[95vw] md:w-[60vw] max-h-[60vh] border bg-stone-200/30 shadow-md rounded-[30px] mx-auto mt-20  pb-24 pt-10  px-12  flex flex-col items-center justify-center space-y-5">
      {content}
    </div>
  );
}

export default App;
