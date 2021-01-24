import React from "react";
import logo from "../assets/img/getir-logo.svg";

const Header = ({ title }) => (
  <header className="flx dir-r jat-sb ialgn-c">
    <img src={logo} alt="Getir Logo" />
    <h1>{title}</h1>
  </header>
);

// export default Todo;
export default Header;
