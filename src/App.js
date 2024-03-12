import { useReducer } from "react";
import Main from "./Main";
import Test from "./components/test";
import questions from "../src/questions.json";
import ChemistryQ from "./components/ChemistryQ";

const subjectsIndex = {
  english: 0,
  math: 1,
  phy: 2,
  chem: 3,
};

const initialState = {
  questions: [],

  status: "ready",

  subjects: {
    english: { completed: false, points: 0, topScore: 0 },
    math: { completed: false, points: 0, topScore: 0 },
    phy: { completed: false, points: 0, topScore: 0 },
    chem: { completed: false, points: 0, topScore: 0 },
  },
  click: 0,
  subject: null,
  index: 0,
  answers: null,
  currentPoint: 0,
};

function reducer(state, action) {
  // const { type, payload } = action;
  // // const subjectObject = state.subjects[state.subject];
  // // const updatedPoints = subjectObject?.points + payload;
  // switch (type) {
  //   case "startQuiz":
  //     return {
  //       ...state,
  //     };
  // }
  switch (action.type) {
    case "startChem":
      return {
        ...state,
        questions: console.log(action.payload),
        status: "chem",
      };
    case "startEnglish":
      return {
        ...state,
        questions: console.log(action.payload),
        status: "english",
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answers: null,
      };
    case "newAnswer":
      const question = questions.at(state.index);
      return {
        ...state,
        answers: action.payload,
        currentPoint:
          action.payload === question.answer
            ? state.currentPoint + question.points
            : state.currentPoint,
      };
    default:
      return {
        questions: "Unknown",
      };
  }
  // console.log({ status }, { type, payload });
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, subject, index, answers, subjects, currentPoint } =
    state;
  return (
    <div>
      {status === "ready" && <Main dispatch={dispatch} />}
      {status === "chem" && (
        <ChemistryQ
          index={index}
          dispatch={dispatch}
          answers={answers}
          currentPoint={currentPoint}
        />
      )}
      {status === "english" && <p>Start English</p>}
    </div>
  );
}

export default App;
