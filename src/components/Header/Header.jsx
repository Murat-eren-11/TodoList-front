import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    isDarkMode ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex flex-row h-20 border-b-4 border-solid items-center justify-around max-lg:justify-between max-lg:p-4 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-row">
        <FormatListBulletedIcon fontSize="large" className="pt-2" />
        <h1 className="text-4xl underline font-roboto ml-2">To Do List</h1>
      </div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </header>
  );
};

export default Header;
