import ThemeMood from "./ThemeMood";

function FinishScreen({ currentTopic, points, numQuestion, dispatch }) {
  return (
    <div className="finish-container">
      <div className="header">
        <div className="questions-topic">
          <img src={currentTopic.icon} alt="quiz topic icon" />
          <p className="finish-topic-name">{currentTopic.title}</p>
        </div>
        <div className="theme-mood-box">
          <div className="sun"></div>
          <ThemeMood dispatch={dispatch} />
          <div className="moon"></div>
        </div>
      </div>

      <div className="finish-box">
        <div className="finish-heading-box">
          <h1 className="finish-heading">
            Quiz completed
            <br />
            <span className="finish-heading-bold">You scored...</span>
          </h1>
        </div>

        <div className="score-container">
          <div className="score-box">
            <div className="questions-topic finish-topic">
              <img src={currentTopic.icon} alt="quiz topic icon" />
              <p className="finish-title">{currentTopic.title}</p>
            </div>
            <span className="points">{points}</span>
            <p className="total-questions">out of {numQuestion}</p>
          </div>
          <button
            className="btn btn-finish"
            onClick={() => dispatch({ type: "restart" })}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinishScreen;
