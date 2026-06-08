import React from "react";
import Navbar from "./Components/Navbar";
import ThemeContext from "./Context/ThemeContext";
import "./App.css";

const App = () => {
  return (
    <ThemeContext>
      <Navbar />
    </ThemeContext>
  );
};

export default App;