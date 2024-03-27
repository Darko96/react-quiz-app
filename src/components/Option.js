function Option({ option, index, dispatch, answer }) {
  return (
    <div
      className={`option ${answer === index ? "answer" : ""}`}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
    >
      <div className="letters">
        {index === 0 && "A"}
        {index === 1 && "B"}
        {index === 2 && "C"}
        {index === 3 && "D"}
      </div>
      <p>{option}</p>
    </div>
  );
}

export default Option;
