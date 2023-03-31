import React from 'react';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
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
              <span>Power Training <br/> Centre, Chandaka</span>
      </a>

        {/* logo
        <a href="/">PTC</a>
        <a href="/">Categories</a> */}
      </li>
      {/* search bar */}
      {/* <li style={{ position: "relative" }}>
        <AiOutlineSearch />
        <input type="search" placeholder="Search for anything" />
      </li> */}

      {/* authentication */}
      <li>
        <a href="/">Academy Business</a>
        <a href="/">Tech on Acdemy</a>
        {/* <AiOutlineShoppingCart /> */}
        <button id="login" onClick={()=>navigate("/auth")}>Log in</button>
        <button id="signup" onClick={()=>navigate("/auth")}>Sign up</button>
      </li>
    </ul>
  )
}

export default Navbar
