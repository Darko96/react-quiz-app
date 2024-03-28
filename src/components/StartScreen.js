import QuizTopics from "./QuizTopics";
import ThemeMood from "./ThemeMood";

function StartScreen({ topics, dispatch }) {
  return (
    <div className="section-startScreen">
      <div className="theme-mood-box">
        <ThemeMood dispatch={dispatch} />
      </div>
      <div className="quiz-box">
        <div className="heading-box">
          <h1 className="main-heading">
            Welcome to the <br />
            <span>Frontend Quiz!</span>
          </h1>
          <p className="description">Pick a subject to get started.</p>
        </div>
        <div className="topics-box">
          <QuizTopics topics={topics} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
