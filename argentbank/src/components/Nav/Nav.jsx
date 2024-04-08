import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp";
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </NavLink>
      <NavLink className={"main-nav-item"} to={"/Login"}>
        <FontAwesomeIcon icon={faCircleUser} />
        <p>Sign In</p>
      </NavLink>
    </nav>
  )
}

export default Nav;