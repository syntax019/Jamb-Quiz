import question from "./questions.json";
import physics from "./physics.json";
import math from "./math.json";

function Main({ dispatch }) {
  return (
    <>
      <div className="flex bg-darkNavy px-16 justify-between text-pureWhite h-screen items-center bg-[url('./images/patterns/bg-desktop-dark.svg')]">
        <div className="basis-2/4 mb-52">
          <h1 className="text-7xl font-light">Welcome to the</h1>
          <h1 className="text-7xl font-medium">JAMB Test!</h1>
          <p className="text-2xl mt-8 italic opacity-50">
            Pick a subject to get started
          </p>
        </div>

        <div>
          <Subject
            onStartQuiz={() =>
              dispatch({ type: "startEnglish", payload: "English" })
            }
          >
            ENGLISH
          </Subject>
          <Subject
            onStartQuiz={() => dispatch({ type: "startMath", payload: math })}
          >
            MATHEMATICS
          </Subject>
          <Subject
            onStartQuiz={() => dispatch({ type: "startPhy", payload: physics })}
          >
            PHYSICS
          </Subject>
          <Subject
            onStartQuiz={() =>
              dispatch({ type: "startChem", payload: question })
            }
          >
            CHEMISTRY
          </Subject>
        </div>
      </div>
    </>
  );
}

export default Main;

function Subject({ children, subject, onStartQuiz }) {
  return (
    <button
      onClick={onStartQuiz}
      className="text-xl text-left w-5/6 font-bold mb-6 py-6 pl-6 border-2 hover:border-purple border-navy border-solid bg-navy rounded-xl"
    >
      {children}
      {subject}
    </button>
  );
}
