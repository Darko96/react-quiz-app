import "./styles.css";
import data from "./data/data.json";
import StartScreen from "./components/StartScreen";
import { useReducer } from "react";
import Quiestion from "./components/Quiestion";
import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";

const initialState = {
  topics: data.quizzes,
  currentTopic: null,
  status: "start",
  index: 0,
  answer: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "active":
      return { ...state, status: "active", currentTopic: action.payload };
    case "nextQuestion":
      return { ...state, index: state.index + 1 };

    default:
      throw new Error("Something went wrong, try again.");
  }
}

export default function App() {
  const [{ topics, currentTopic, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log(currentTopic);

  return (
    <main>
      <div className="container">
        {status === "start" && (
          <StartScreen topics={topics} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Quiestion currentTopic={currentTopic} index={index} />
        )}
      </div>
    </main>
  );
}
