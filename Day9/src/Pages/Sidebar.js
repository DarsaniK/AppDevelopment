import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file
import { BiHomeAlt, BiBarChartAlt2, BiBell, BiPieChartAlt, BiHeart, BiWallet, BiLogOut, BiMoon, BiSun } from 'react-icons/bi';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
    <nav className={`sidebar ${isSidebarOpen ? 'close' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <header>
        <div className="image-text">
          <span className="image"></span>

          <div className="text logo-text">
            <span className="name">Stella Army</span>
            <span className="profession">Web developer</span>
          </div>
        </div>

        <i className={`bx bx-chevron-${isSidebarOpen ? 'right' : 'left'} toggle`} onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul className="menu-links">
            <li className="nav-link">
              <a href="#">
                <BiHomeAlt className="icon" />
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <BiBarChartAlt2 className="icon" />
                <span className="text nav-text">Revenue</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <BiBell className="icon" />
                <span className="text nav-text">Notifications</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <BiPieChartAlt className="icon" />
                <span className="text nav-text">Analytics</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <BiHeart className="icon" />
                <span className="text nav-text">Likes</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <BiWallet className="icon" />
                <span className="text nav-text">Wallets</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <BiLogOut className="icon" />
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          <li className="mode">
            <div className="sun-moon" onClick={toggleDarkMode}>
              {isDarkMode ? <BiMoon className="icon moon" /> : <BiSun className="icon sun" />}
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

            <div className={`toggle-switch ${isDarkMode ? 'dark' : ''}`}></div>
          </li>
        </div>
      </div>
      <div className="bottom-content">
            <li>
              <a href="#">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text" >Logout</span>
              </a>
            </li>

            <li className="mode" onClick={toggleDarkMode}>
              <div className="sun-moon">
                <i className={`bx bx-moon icon moon ${isDarkMode ? 'hidden' : ''}`}></i>
                <i className={`bx bx-sun icon sun ${isDarkMode ? '' : 'hidden'}`}></i>
              </div>
              <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
    </nav>
        </div>
  );
}

export default Sidebar;
