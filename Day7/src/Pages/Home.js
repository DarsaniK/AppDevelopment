/*import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState('Weather');
  const [selectedNav, setSelectedNav] = useState('Weather'); 

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNavClick = (nav) => {
    setSelectedNav(nav);
  };

  return (
    <div>
    <div className="dashboard">
      <header className="top-navbar">
        <h1>PlantPro</h1>
      </header>
      <nav className="left-navbar">
        <ul>
          <li>
            <button
              className={selectedOption === 'Weather' ? 'active' : ''}
              onClick={() => {
                handleOptionClick('Weather');
                handleNavClick('Weather'); 
              }}
            >
              Weather
            </button>
          </li>
          <li>
            <button
              className={selectedOption === 'Timer' ? 'active' : ''}
              onClick={() => {
                handleOptionClick('Timer');
                handleNavClick('Timer'); 
              }}
            >
              Timer
            </button>
          </li>
          <li>
            <button
              className={selectedOption === 'Scan' ? 'active' : ''}
              onClick={() => {
                handleOptionClick('Scan');
                handleNavClick('Scan'); 
              }}
            >
              Scan
            </button>
          </li>
          <li>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </li>
          <li>
            <hr />
          </li>
          <li>
            <button
              className={selectedNav === 'About Us' ? 'active' : ''}
              onClick={() => {
                handleNavClick('About Us'); 
              }}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              className={selectedNav === 'Contact Us' ? 'active' : ''}
              onClick={() => {
                handleNavClick('Contact Us'); 
              }}
            >
              Contact Us
            </button>
          </li>
          <li>
            <button
              className={selectedNav === 'Logout' ? 'active' : ''}
              onClick={() => {
                handleNavClick('Logout'); 
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <main>
      </main>
    </div>
    </div>
  );
}

export default Dashboard;*/


import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isWeatherImageHovered, setIsWeatherImageHovered] = useState(false);
  const [isScanImageHovered, setIsScanImageHovered] = useState(false);
  const [isTimerImageHovered, setIsTimerImageHovered] = useState(false);
  const [isLogoutImageHovered, setIsLogoutImageHovered] = useState(false);
  const [isDashboardImageHovered, setIsDashboardImageHovered] = useState(false);
  const navigate=useNavigate();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleRegister=()=>{
    navigate("/weate");
  };
  const handleDash=()=>{
    navigate("/dash");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector("body");
    const modeText = document.querySelector(".mode-text");
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      modeText.innerText = "Dark mode";
    } else {
      body.classList.add("dark");
      modeText.innerText = "Light mode";
    }
  };

  const handleDashboardImageHover = () => {
    if (!isSidebarOpen) {
      setIsDashboardImageHovered(!isDashboardImageHovered);
    }
  };
  const handleWeatherImageHover = () => {
    if (!isSidebarOpen) {
      setIsWeatherImageHovered(!isWeatherImageHovered);
    }
  };

  const handleScanImageHover = () => {
    if (!isSidebarOpen) {
      setIsScanImageHovered(!isScanImageHovered);
    }
  };

  const handleTimerImageHover = () => {
    if (!isSidebarOpen) {
      setIsTimerImageHovered(!isTimerImageHovered);
    }
  };

  const handleLogoutImageHover = () => {
    if (!isSidebarOpen) {
      setIsLogoutImageHovered(!isLogoutImageHovered);
    }
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
      <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
          <li>
          <div className="abco">About Us</div>
          </li>
          <li>
          <div className="abco">Contact Us</div>
          </li>
        </ul>
      </nav>
    <nav className={`sidebar ${isSidebarOpen ? '' : 'close'} ${isDarkMode ? 'dark' : ''}`}>
      <header>

        <div className="image-text">
          {isSidebarOpen ? (
           <div className="text logo-text"> 
            <span className="name">PlantPro</span>
              <span className="profession">GardenSystem</span>
            </div>
          ) : 
          (
            <>
              <img
                src="weather.png"
                alt="Weather"
                className={`weath ${isSidebarOpen ? 'hidden' : ''} ${isWeatherImageHovered ? 'highlighted' : ''}`}
                onMouseEnter={handleWeatherImageHover}
                onMouseLeave={handleWeatherImageHover}
              />
              <img
                src="scan.png"
                alt="Scan"
                className={`scann ${isSidebarOpen ? 'hidden' : ''} ${isScanImageHovered ? 'highlighted' : ''}`}
                onMouseEnter={handleScanImageHover}
                onMouseLeave={handleScanImageHover}
              />
              <img
                src="time.png"
                alt="Timer"
                className={`timee ${isSidebarOpen ? 'hidden' : ''} ${isTimerImageHovered ? 'highlighted' : ''}`}
                onMouseEnter={handleTimerImageHover}
                onMouseLeave={handleTimerImageHover}
              />
              <img
                src="logout.png"
                alt="logout"
                className={`logoutt ${isSidebarOpen ? 'hidden' : ''} ${isLogoutImageHovered ? 'highlighted' : ''}`}
                onMouseEnter={handleLogoutImageHover}
                onMouseLeave={handleLogoutImageHover}
              />
            </>
          )}
        </div>
        <i className={`bx bx-chevron-right toggle ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
          <li className="nav-link">
              <a href="#">
                <i className='bx bx-cloud icon'></i>
                <span className="text nav-text" onClick={handleDash}>Dashboard</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className='bx bx-cloud icon'></i>
                <span className="text nav-text" onClick={handleRegister}>Weather</span>
                <img src="weather.png" alt="Weather " className={`weat ${isSidebarOpen ? 'hidden' : ''}`}/>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className='bx bx-scan icon'></i>
                <span className="text nav-text">Scan</span>
                <img src="scan.png" alt="Scan" className={`scan ${isSidebarOpen ? 'hidden' : ''}`}/>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className='bx bx-time icon'></i>
                <span className="text nav-text">Timer</span>
                <img src="time.png" alt="Timer " className={`time ${isSidebarOpen ? 'hidden' : ''}`}/>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <a href="#">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
                <img src="logout.png" alt="logout" className={`logout ${isSidebarOpen ? 'hidden' : ''}`}/>
            </a>
          </li>

          <li className="mode" onClick={toggleDarkMode}>
            <div className="sun-moon">
              <i className={`bx bx-moon icon moon ${isDarkMode ? 'hidden' : ''}`}></i>
              <i className={`bx bx-sun icon sun ${isDarkMode ? '' : 'hidden'}`}></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

            <div className="toggle-switch1">
              <span className="switch1"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
    <div className="page-content">
        <h1>
          Welcome to <span className="highlight"> PlantPro </span> GardenSystem
        </h1>
       <div className='cont'><p>This is your dashboard content.</p></div>
      </div>

    </div>
  );
}

export default Home;
