import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <img src="/Assets/pic/Logo-indigo.png" alt="Logo IBS" />
        </NavLink>
      </div>
      <div className="nav_content">
        <div className="pages">
          <ul>
            <NavLink to="/blockchain" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>BLOCKCHAIN & CRYPTOS</li>
            </NavLink>
            <NavLink to="/diplomes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>DIPLÔMES</li>
            </NavLink>
            <NavLink to="/bootcamp" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>BOOTCAMP</li>
            </NavLink>
            <NavLink to="/campus" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>OPEN CAMPUS</li>
            </NavLink>
            <NavLink to="/admission" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>ADMISSION</li>
            </NavLink>
            <NavLink to="/actualite" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>ACTUALITÉ</li>
            </NavLink>
            <NavLink to="/recrutement" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>NOUS RECRUTONS</li>
            </NavLink>
          </ul>
        </div>
        <div className="search">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
