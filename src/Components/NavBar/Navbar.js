import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="rectangle-div">
      <div className="r1">
        <img
          className="gujarat-police-logo-1-icon"
          alt=""
          src="/Gujarat_Police_Logo 1.png"
        />
        <div className="qr-code-based-feedback-system">
          <span className="qr-code-based-container">
            <p className="qr-code-based">QR code based</p>
            <p className="feedback-system-p">Feedback System</p>
          </span>
        </div>

        <img className="gruh-vibhag-icon" alt="" src="/Gruhvibhag.png" />
      </div>

      <ButtonGroup
        style={{ top: "112px", position: "relative" }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <header className="navbar">
          <div className="navbar__title navbar__item">
            <a href="#">Home</a>
          </div>
          <div className="navbar__item">
            <a href="#">Scan QR code</a>
          </div>
          <div className="navbar__item">
            <a href="#">Citizen login</a>
          </div>
          <div className="navbar__item">
            <a href="#">Admin login</a>
          </div>
          <div className="navbar__item">
            <a href="#">Contect us</a>
          </div>
        </header>
      </ButtonGroup>
    </div>
  );
}

export default NavBar;
