function ThemeMood() {
  return (
    <div className="theme-mood-container">
      {/* <img src="../../public/assets/images/icon-sun-light.svg" alt="" /> */}
      <div className={`dark-mode-switch ${"darkMode" ? "dark-mode" : ""}`}>
        <input
          type="checkbox"
          id="darkModeSwitch"
          // onChange={toggleDarkMode}
          // checked={darkMode}
        />
        <label htmlFor="darkModeSwitch"></label>
      </div>
      {/* <img src="../public/assets/images/icon-sun-dark.svg" alt="" /> */}
    </div>
  );
}

export default ThemeMood;
