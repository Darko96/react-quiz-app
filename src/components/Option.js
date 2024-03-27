function Option({ option, index }) {
  return (
    <div className="option">
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
