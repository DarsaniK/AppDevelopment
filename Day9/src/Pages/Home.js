import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import './Home.css';
import './Responsive.css';
import videoFile from './videobg.mp4';
import { BsSearch, BsHouse, BsFillCloudSunFill, BsCamera, BsAlarm, BsHeart, BsWallet, BsCloud, BsScan, BsClock } from 'react-icons/bs';
import { useDarkMode } from './context/DarkModeContext';


function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location=useLocation();
  const { name } = location.state || {};
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleWeather = () => {
    navigate('/weather');
};

const handleTimer = () => {
  navigate('/timer');
};

const handleDash = () => {
  navigate('/dashboard');
};
const handleAbout = () => {
  navigate('/about');
};

const handleLogout = () => {
  navigate('/logout');
};
const handlePrivacy = () => {
  navigate('/privacy');
};
const handleTerms = () => {
  navigate('/terms');
};

const handleContact = () => {
  navigate('/contact');
};
const handlefaq = () => {
  navigate('/faq');
};
const handlescan = () => {
  navigate('/scan');
};

  
  /*const [imageIndex, setImageIndex] = useState(0);
  const images = ['image1.jpg', 'image2.jpg', 'image3.png']; // Replace with your image URLs

  useEffect(() => {
    // Function to cycle through images with a delay
    const cycleImages = () => {
      const nextIndex = (imageIndex + 1) % images.length;
      setImageIndex(nextIndex);
    };

    // Set an interval to change the image every 5 seconds
    const intervalId = setInterval(cycleImages, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [imageIndex, images]);*/

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
      <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <h2 className={isDarkMode ? 'dark-text' : ''}>Welcome to Plant Pro, {name ? name.toUpperCase() : 'USER'}!</h2>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : '' }  onClick={handleAbout}>About Us</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleContact}>Contact Us</a>
          </li>
        </ul>
      </nav>
      <nav className={`sidebar ${isSidebarOpen ? '' : 'close'} ${isDarkMode ? 'dark' : ''}`}>
        <header>
          <div className="image-text">
            {isSidebarOpen ? (
              <div className="text logo-text">
                <span className="name" >PlantPro</span>
                <span className="profession">GardenSystem</span>
              </div>
            ) : (
              <>
              </>
            )}
          </div>

          <i className={`bx ${isSidebarOpen ? 'bx-chevron-right' : 'bx-chevron-left'} toggle`} onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">

      <ul className="menu-links">
        <li className="nav-link">
          <a href="#">
            <BsHouse className='icon' onClick={handleDash} />
            <span className="text nav-text" onClick={handleDash}>Dashboard</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="#">
            <BsFillCloudSunFill className='icon' onClick={handleWeather}/>
            <span className="text nav-text" onClick={handleWeather}>Weather</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="#">
            <BsCamera className='icon' onClick={handlescan} />
            <span className="text nav-text" onClick={handlescan}>Scan</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="#">
            <BsAlarm className='icon' onClick={handleTimer}/>
            <span className="text nav-text" onClick={handleTimer}>Timer</span>
          </a>
        </li>
      </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a href="#">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text" onClick={handleLogout}>Logout</span>
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
        </div>
      </nav>

      
      <div className="video-container">
      <video controls autoPlay loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 All rights reserved.</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlefaq}>FAQ's</a>
          </li>
          
        </ul>
      </nav>
      </div>
  );
}

export default Home;