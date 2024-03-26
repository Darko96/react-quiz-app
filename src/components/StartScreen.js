import QuizList from "./QuizList";

function StartScreen() {
  return (
    <div>
      <div>
        <h1>Welcome to the Frontend Quiz!</h1>
        <p>Pick a subject to get started. HTML CSS JavaScript Accessibility</p>
      </div>
      <div>
        <QuizList />
      </div>
    </div>
  );
}

export default StartScreen;
