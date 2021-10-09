import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends React.Component {
  
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div>
            <NavLink className="link " exact to="/">
              Personajes de Bleach
            </NavLink>
          </div>
          <ul className="ul">
            <li>
              <NavLink className="link " exact to="/characterDetail">
                Character Detail
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact className="link">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
