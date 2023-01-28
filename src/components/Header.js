import logo from "../img/logo.svg";
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__block">
        <img className="logo" src={logo} alt="логотип" />
      </div>
    </header>
  );
}

export default Header;
