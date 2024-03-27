function Topic({ topic, dispatch }) {
  //   console.log(topic);
  return (
    <div
      className="topic"
      onClick={() => dispatch({ type: "active", payload: topic })}
    >
      <img src={topic.icon} alt="quiz topic icon" />
      <p>{topic.title}</p>
    </div>
  );
}

export default Topic;
