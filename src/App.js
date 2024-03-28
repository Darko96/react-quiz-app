import "./styles.css";
import data from "./data/data.json";
import StartScreen from "./components/StartScreen";
import { useReducer } from "react";
import Quiestion from "./components/Quiestion";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  topics: data.quizzes,
  currentTopic: null,
  status: "start",
  index: 0,
  selectedAnswer: null,
  answer: null,
  points: 0,
  themeMood: "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "active":
      return { ...state, status: "active", currentTopic: action.payload };
    case "selectedAnswer":
      return { ...state, selectedAnswer: action.payload };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    case "nextQuestion":
      return {
        ...state,
        points:
          state.currentTopic.questions[state.index].answer === state.answer
            ? state.points + 1
            : state.points,
        index: state.index + 1,
        answer: null,
        selectedAnswer: null,
      };
    case "finish":
      return { ...state, status: "finish" };
    case "restart":
      return {
        ...state,
        status: "start",
        currentTopic: null,
        index: 0,
        selectedAnswer: null,
        answer: null,
        points: 0,
      };
    case "changeTheme":
      return {
        ...state,
        themeMood: state.themeMood === "light" ? "dark" : "light",
      };

    default:
      throw new Error("Something went wrong, try again.");
  }
}

export default function App() {
  const [
    {
      topics,
      currentTopic,
      status,
      index,
      answer,
      selectedAnswer,
      points,
      themeMood,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestion = currentTopic?.questions.length;

  return (
    <main id={themeMood}>
      <div className="container">
        {status === "start" && (
          <StartScreen topics={topics} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Quiestion
            currentTopic={currentTopic}
            index={index}
            dispatch={dispatch}
            answer={answer}
            selectedAnswer={selectedAnswer}
            numQuestion={numQuestion}
          />
        )}
        {status === "finish" && (
          <FinishScreen
            currentTopic={currentTopic}
            points={points}
            numQuestion={numQuestion}
            dispatch={dispatch}
          />
        )}
      </div>
    </main>
  );
}
