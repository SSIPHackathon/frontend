// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./Navbar.css";
import React from "react";
import gruhVibhagImg from "../../Assets/Home/g1.png";
import gujaratPolice from "../../Assets/Home/g2.png";
//var logo1 = require('../../Assets/Gujarat_Police_Logo 1.png')
function NavBar() {
  return (
    <div className="rectangle-div">
      <div className="temp"></div>
      <div className="r1">
        <img
          className="gujarat-police-logo-1-icon"
          alt=""
          src={gruhVibhagImg}
        />
        <div className="qr-code-based-feedback-system">
          <div className="qr-code-based-container">
            <p className="qr-code-based">QR code based</p>
            <p className="feedback-system-p">Feedback System</p>
          </div>
        </div>
        <img className="gruh-vibhag-icon" alt="" src={gujaratPolice} />
      </div>

      {/* <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <header className="navbar">
          <div>
            <div className="navbar__title navbar__item">
              <a href="/">Home</a>
            </div>
            <div className="navbar__item">
              <a href="/scan">Scan QR code</a>
            </div>
            <div className="navbar__item">
              <a href="/Citizen">Citizen login</a>
            </div>
            <div className="navbar__item">
              <a href="/admin-login">Admin login</a>
            </div>
            <div className="navbar__item">
              <a href="/contect-us">Contact us</a>
            </div>
          </div>
        </header>
      </ButtonGroup> */}
    </div>
  );
}

export default NavBar;
