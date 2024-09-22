import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      {/* Barra normal */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home" className="brand">Navbar</a>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>
        <div className="navbar-right">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </nav>

      {/* Barra invertida */}
      <nav className="navbar rotated-navbar">
        <div className="navbar-left">
          <a href="#home" className="brand">Navbar</a>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>
        <div className="navbar-right">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
