import React from "react";
import "./header.css";
const Header = () => {
  const toggle = () => {
    document.querySelector(".menu").classList.toggle("active");
  };
  const hide = () => {
    document.querySelector(".menu").classList.remove("active");
  };
  return (
    <>
      <div className="navbar">
        <h1 className="title">Tirupati Tailors</h1>
        <ul className="menu">
          <li className="li">
            <a href="#home" onClick={hide}>
              Home
            </a>
          </li>
          <li className="li">
            <a href="#design" onClick={hide}>
              Designs
            </a>
          </li>
          <li className="li">
            <a href="#contact" onClick={hide}>
              Contact us
            </a>
          </li>
          <div className="cls" onClick={hide}>
            <i class="fas fa-times fa-2x"></i>
          </div>
        </ul>
        <div className="tog" onClick={toggle}>
          <div className="hamb"></div>
          <div className="hamb"></div>
          <div className="hamb"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
