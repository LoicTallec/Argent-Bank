import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth.action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import "./nav.css";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/Login");
  };

  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </NavLink>

      {!isConnected ? (
        <NavLink 
          className="main-nav-item" to={"/Login"}>
          <FontAwesomeIcon icon={faCircleUser} />
          <p>Sign In</p>
        </NavLink>
      ) : (
        <ul className="nav-list">
          <li>
            <NavLink 
              className="nav-item" 
              to={"/Profile"}>
                <FontAwesomeIcon icon={faCircleUser} />
              <p>{user.userName}</p>
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="nav-item" 
              to={"/"} 
              onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              <p>Sign Out</p>
            </NavLink>
          </li>
        </ul>
      )}

    </nav>
  )
}

export default Nav;