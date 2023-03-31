import React from 'react';
import { useNavigate } from 'react-router-dom';
import { optclLogo } from "../../assets/images";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className="navbar-container">
      {/*  brand */}
      <li>
        <a href="/" className="navbar-logo">
          <img src={optclLogo} alt="" />
          <div>PTC</div>
          <span>Power Training <br /> Centre, Chandaka</span>
        </a>
      </li>
      <li>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/">Training</a>
        <a href="/">Faculties</a>
        <a href="/">Contact Us</a>
      </li>
      <li>
        <button id="login" onClick={() => navigate("/auth")}>Log in</button>
        <button id="signup" onClick={() => navigate("/auth")}>Sign up</button>
      </li>
    </ul>
  )
}

export default Navbar
