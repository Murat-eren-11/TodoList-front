import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon className="iconlist" icon="rectangle-list" />
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
