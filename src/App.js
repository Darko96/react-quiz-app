import { useReducer } from "react";
import Header from "./components/Header";
import data from "./data/data.json";
import StartScreen from "./components/StartScreen";

const initialState = data.quizzes;

console.log(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "html":
      return console.log("da");
    case "css":
      return console.log("da");
    case "javascript":
      return console.log("da");
    case "accessibility":
      return console.log("da");
    default:
      throw new Error("Something went wrong!");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Header />
      <StartScreen />
    </div>
  );
}

/*

    <!-- Quiz menu start -->



    <!-- Quiz menu end -->

    <!-- Quiz question start -->

    Question
    <!-- number -->
    of 10 A B C D Submit answer

    <!-- Quiz question end -->

    <!-- Quiz completed start -->

    Quiz completed You scored...

    <!-- score -->
    out of 10

    <!-- Quiz completed end -->

*/
