import questions from "../questions.json";
import Button from "./Button";
function ChemistryQ({ index, dispatch, answers, currentPoint, subject }) {
  const hasAnswered = answers !== null;
  const question = questions;
  // console.log(question);
  const firstQuestion = question[index];
  return (
    <div className="flex bg-darkNavy gap-24 px-16 justify-between text-pureWhite h-screen items-center bg-[url('./images/patterns/bg-desktop-dark.svg')]">
      <div className="basis-2/4 mb-96">
        <div className="flex items-center justify-between">
          <p className="text-xl mt-8 italic opacity-80">
            Question {index + 1} of {question.length + 1}
          </p>
          <p className="text-xl mt-8 italic opacity-80">
            <strong>Points: {currentPoint}</strong>
          </p>
        </div>
        {/* The question  */}
        <p className="text-2xl mt-8">{question[index].question}</p>
      </div>
      {/* Looping through the options  */}
      <div className="w-3/5 ">
        {Object.entries(firstQuestion.options).map(([option, value]) => (
          <div
            key={option}
            className={`text-xl text-left w-5/6 font-bold mb-6 py-4 pl-6 border-2 hover:border-purple border-navy border-solid bg-navy rounded-xl ${
              option === answers ? "bg-green" : ""
            } ${
              hasAnswered
                ? option === firstQuestion.answer
                  ? "bg-green"
                  : "bg-red"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: option })}
          >
            {value}
          </div>
        ))}
        <Button index={index} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default ChemistryQ;
