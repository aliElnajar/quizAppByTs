import { useState } from "react";
type ContentProps = {
  score: number;
  startQuiz: (dm: boolean) => void;
};
const InitialContent = ({ score, startQuiz }: ContentProps) => {
  const [deathMatch, setDeathMatch] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-semibold">Qui(ck/z)</h1>
      <p className="text-xl text-gray-700 font-semibold">
        score: <span className="text-blue-800/80">{score}</span>
      </p>
      <div className="flex items-center mr-4 mb-6">
        <input
          checked={deathMatch}
          readOnly
          className="hidden"
          type="radio"
          id="easy"
          onClick={() => setDeathMatch((prev) => !prev)}
        />
        <label
          className="flex items-center cursor-pointer text-xl reddish"
          htmlFor="easy"
        >
          <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink reddish"></span>
          death match
        </label>
      </div>
      <p className="text-lg italic pb-2 pl-6 ">
        {deathMatch
          ? "Once you mistaken you will lose"
          : "Continue till the end of the game"}
      </p>
      <button
        className="rounded-lg px-4 py-2  uppercase bg-blue-500 text-white hover:bg-blue-600 duration-300 block mx-auto"
        onClick={() => startQuiz(deathMatch)}
      >
        start quiz
      </button>
    </>
  );
};

export default InitialContent;
