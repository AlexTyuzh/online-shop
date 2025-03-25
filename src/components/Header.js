import { Link } from "react-router-dom";
import Green from "../img/Green.png";
import "./Header.css";
import Contacts from "./Contacts";
import LogIn from "./LogIn";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img className="header-logo" src={Green} alt="Logo Green Plant Shop" />
      </Link>
      <Contacts />
      <LogIn />
    </header>
  );
}
