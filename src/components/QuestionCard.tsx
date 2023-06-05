import { useState } from "react";

type cardProps = {
  question: string;
  answers: string[];
  questionNumber: number;
  gettingAnswerHandler: (a: string) => void;
};

const QuestionCard: React.FC<cardProps> = ({
  question,
  answers,
  questionNumber,
  gettingAnswerHandler,
}) => {
  const [answer, setAnswer] = useState<null | string>(null);
  const selectingAnswerHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    target.value === answer ? null : setAnswer(target.value);
  };
  const questionFilteredString = question?.replaceAll(/&quot;|&#039;/g, "");
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!answer) return;
    gettingAnswerHandler(answer!);
    setAnswer(null);
  };
  return (
    <form className=" w-[100%]  space-y-5 pb-2" onSubmit={submitHandler}>
      <h1 className="text-gray-600 font-bold text-lg md:text-xl text-center mt-20">
        <span>{questionNumber + 1}/10</span> {questionFilteredString}
      </h1>
      <div className="pl-12 pt-12 pb-5">
        {answers.map((ans: string, i: number) => (
          <div key={i} className="flex items-center mr-4 mb-4">
            <input
              readOnly
              className="hidden"
              type="radio"
              id={ans}
              name="answer"
              value={ans}
              onClick={selectingAnswerHandler}
              checked={answer === ans}
            />
            <label
              className="flex mr-auto items-center  cursor-pointer text-md md:text-lg"
              htmlFor={ans}
            >
              <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
              {ans}
            </label>
          </div>
        ))}
      </div>

      <button
        className="rounded-lg uppercase px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 block mx-auto"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default QuestionCard;
