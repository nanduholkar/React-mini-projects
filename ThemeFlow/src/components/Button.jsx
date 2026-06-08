import React, { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default Button;