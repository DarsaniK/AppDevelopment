import React from 'react';
import './PHome.css'; // Import your CSS file

function PHome() {
  return (
    <div>
      <div className="top-navbar">
        <div className='plantpro'>PlantPro</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="side-navbar">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/weather">Weather</a></li>
          <li><a href="/scan">Scan</a></li>
          <li><a href="/timer">Timer</a></li>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>

      <div className="bottom-navbar">
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  );
}

export default PHome;
