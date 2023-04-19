import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/mission" element={<Mission />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
