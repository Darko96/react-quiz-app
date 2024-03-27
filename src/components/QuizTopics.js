import Topic from "./Topic";

function QuizTopics({ topics, dispatch }) {
  console.log(topics);
  return (
    <div className="topics-container">
      {topics.map((topic, index) => {
        return (
          <Topic
            topic={topic}
            index={index}
            key={topic.title}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default QuizTopics;
