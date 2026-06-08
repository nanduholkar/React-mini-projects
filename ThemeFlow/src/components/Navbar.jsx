import React, { useContext } from "react";
import Nav2 from "./Nav2";
import Button from "./Button";
import { ThemeDataContext } from "../Context/ThemeContext";

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);

  return (
    <div className={`navbar ${theme}`}>
      <Nav2 />
      <Button />
    </div>
  );
};

export default Navbar;