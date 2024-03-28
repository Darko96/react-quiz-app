function ThemeMood({ dispatch }) {
  return (
    <div
      className={`dark-mode-switch ${"darkMode" ? "dark-mode" : ""}`}
      onChange={() => dispatch({ type: "changeTheme" })}
    >
      <img src="../public/assets/images/icon-sun-dark.svg" alt="" />
      <input type="checkbox" id="darkModeSwitch" />
      <label htmlFor="darkModeSwitch"></label>
    </div>
  );
}

export default ThemeMood;
