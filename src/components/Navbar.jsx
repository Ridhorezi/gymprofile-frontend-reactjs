import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link className="logo" to="/" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsNavShowing(false)}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav_toggle_btn"
          onClick={() => setIsNavShowing((prevState) => !prevState)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
