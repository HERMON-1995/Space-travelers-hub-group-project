import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMission } from '../redux/missionsSlice';
import planet from '../images/planet.png';
import '../styles/Nav.css';

export default function Nav() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  },
  [dispatch]);
  return (

    <nav className="nav-bar">
      <img src={planet} alt="Logo" />
      <h1 className="h4">Space Travelers&apos; Hub</h1>
      <NavLink className="nav-linkfirst" to="/">Rockets</NavLink>
      <NavLink className="nav-linksecond" to="/mission">Missions</NavLink>
      <NavLink className="nav-linkthird" to="/profile">My Profile</NavLink>
    </nav>
  );
}
