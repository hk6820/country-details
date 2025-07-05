import "./Header.css";

export const Header = ({ mode, toggleTheme }) => {
  return (
    <header className={`header ${mode}`}>
      <h1>Where In the Worlds</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        {mode === "dark" ? (
          <span>
            🌞 <strong>Light Mode</strong>
          </span>
        ) : (
          <span>
            🌙 <strong>Dark Mode</strong>
          </span>
        )}
      </button>
    </header>
  );
};
