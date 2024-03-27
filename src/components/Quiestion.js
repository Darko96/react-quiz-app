import Option from "./Option";
import ThemeMood from "./ThemeMood";

function Quiestion({ currentTopic, index }) {
  return (
    <div className="question-container">
      <div className="header">
        <div className="questions-topic">
          <img src={currentTopic.icon} alt="quiz topic icon" />
          <p>{currentTopic.title}</p>
        </div>
        <ThemeMood />
      </div>

      <div className="questions">
        <div className="question-box">
          <h2 className="question">{currentTopic.questions[index].question}</h2>
        </div>

        <div className="options">
          {currentTopic.questions[index].options.map((option, index) => (
            <Option
              key={option}
              option={option}
              index={index}
              currentTopic={currentTopic}
            />
          ))}

          <button className="btn-submit">Submit Answer</button>
        </div>
      </div>
    </div>
  );
}

export default Quiestion;
