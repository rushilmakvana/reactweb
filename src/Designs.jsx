// import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import "./design.css";
const Designs = () => {
  return (
    <div id="design">
      <h1 className="des_h1">Some Trending Designs</h1>
      <div className="photos" data-aos="fade-in">
        <div className="Blouses">
          <h2>Blouses</h2>
          <img
            className="single_ph"
            src="https://tirupati-api.herokuapp.com/static/img/blouse.jpg"
            alt="blouse"
            onClick={() => {
              window.location.href = "http://localhost:3000/blouses";
            }}
          ></img>
          <NavLink className="link" to="/blouses">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
        <div className="Dresses">
          <h2>Dresses</h2>
          <img
            className="single_ph"
            src="https://tirupati-api.herokuapp.com/static/img/dress.jpg"
            alt="dress"
            onClick={() => {
              window.location.href = "http://localhost:3000/dresses";
            }}
          ></img>
          <NavLink className="link" to="/dresses">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
        <div className="Kurtis">
          <h2>Kurtis</h2>
          <img
            className="single_ph"
            src="https://tirupati-api.herokuapp.com/static/img/kurti.jpg"
            alt="kurti"
            onClick={() => {
              window.location.href = "http://localhost:3000/kurtis";
            }}
          ></img>
          <NavLink className="link" to="/kurtis">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
        <div className="Gowns">
          <h2>Gowns</h2>
          <img
            className="single_ph"
            src="https://tirupati-api.herokuapp.com/static/img/gown.jpg"
            alt="gown"
            onClick={() => {
              window.location.href = "http://localhost:3000/gowns";
            }}
          ></img>
          <NavLink className="link" to="/gowns">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Designs;
