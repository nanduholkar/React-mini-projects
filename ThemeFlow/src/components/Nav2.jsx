import React, { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Nav2 = () => {
  const [theme] = useContext(ThemeDataContext);

  return (
    <div className="nav-links">
      <h4>🏠 Home</h4>
      <h4>📞 Contact</h4>
      <h4>⚙️ Services</h4>
      <h4>📧 Support</h4>

      <span className="theme-status">
        Current Theme: <b>{theme}</b>
      </span>
    </div>
  );
};

export default Nav2;