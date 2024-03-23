import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header>
      <div className="colgauche">
        <FontAwesomeIcon className="iconlist" icon="rectangle-list" />
        <h1>Todo List</h1>
      </div>
      <div className="coldroite">
        <input
          type="checkbox"
          id="switch"
          className="switchbtn"
          onChange={toggleDarkMode}
          checked={isDarkMode}
        />
        <label htmlFor="switch">Toggle</label>
      </div>
    </header>
  );
};

export default Header;
