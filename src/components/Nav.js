import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <nav className="nav-bar">
      <img src={planet} alt="Logo" />
      <h1>Space travelers Hub</h1>
      <NavLink className="nav-linkfirst" to="/">Rockets</NavLink>
      <NavLink className="nav-linksecond" to="/mission">Missions</NavLink>
      <NavLink className="nav-linkthird" to="/profile">My Profile</NavLink>
    </nav>
  );
}
