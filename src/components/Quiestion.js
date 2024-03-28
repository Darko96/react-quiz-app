import ThemeMood from "./ThemeMood";

function Quiestion({
  currentTopic,
  index,
  dispatch,
  answer,
  selectedAnswer,
  numQuestion,
}) {
  const hasAnswered = answer !== null;
  const correctAnswer = currentTopic.questions[index].answer;

  return (
    <div className="question-container">
      <div className="header">
        <div className="questions-topic">
          <div
            className={`topic-icons ${
              currentTopic.title === "HTML" && "html-bg"
            } ${currentTopic.title === "CSS" && "css-bg"} ${
              currentTopic.title === "JavaScript" && "js-bg"
            } ${currentTopic.title === "Accessibility" && "acc-bg"}`}
          >
            <img src={currentTopic.icon} alt="quiz topic icon" />
          </div>
          <p className="current-topic">{currentTopic.title}</p>
        </div>

        <div className="theme-mood-box">
          <div className="sun"></div>
          <ThemeMood dispatch={dispatch} />
          <div className="moon"></div>
        </div>
      </div>

      <div className="questions">
        <div className="question-box">
          <p className="num-of-questions">
            Question {index + 1} of {numQuestion}
          </p>
          <h2 className="question">{currentTopic.questions[index].question}</h2>
          <progress
            className="progress-bar"
            max={numQuestion}
            value={index + Number(answer !== null)}
          />
        </div>

        <div className="options">
          {currentTopic.questions[index].options.map((option, i) => (
            <button
              disabled={hasAnswered}
              className={`option ${selectedAnswer === i ? "answer" : ""} ${
                hasAnswered
                  ? correctAnswer === answer && i === answer
                    ? "correct"
                    : ""
                  : ""
              } ${
                hasAnswered &&
                selectedAnswer === i &&
                currentTopic.questions[index].answer !== answer
                  ? "wrong"
                  : ""
              } ${
                hasAnswered
                  ? correctAnswer === answer && i === answer
                    ? "correct"
                    : ""
                  : ""
              } ${hasAnswered ? (correctAnswer === i ? "correct" : "") : ""}`}
              onClick={() =>
                dispatch({
                  type: "selectedAnswer",
                  payload: i,
                })
              }
              key={i}
            >
              <span className="letters">
                {i === 0 && "A"}
                {i === 1 && "B"}
                {i === 2 && "C"}
                {i === 3 && "D"}
              </span>
              <span className="answers">{option}</span>
            </button>
          ))}
          {hasAnswered && index !== numQuestion - 1 && (
            <button
              className="btn"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next Quiestion
            </button>
          )}
          {index === numQuestion - 1 && hasAnswered && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "finish" })}
            >
              Finish
            </button>
          )}
          {!hasAnswered && (
            <button
              className="btn"
              onClick={() =>
                dispatch({ type: "newAnswer", payload: selectedAnswer })
              }
              disabled={hasAnswered}
            >
              Submit Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiestion;
