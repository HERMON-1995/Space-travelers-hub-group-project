import React from 'react';
import planet from '../images/planet.png';

export default function Nav() {
  return (
    <div className="nav-bar">
      <img src={planet} alt="Logo" />
      <h1>Space travelers Hub</h1>
    </div>
  );
}
