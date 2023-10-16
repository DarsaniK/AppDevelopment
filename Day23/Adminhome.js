import React, { useState, useEffect } from 'react';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import './Home.css';
import { useDarkMode } from './context/DarkModeContext';


function AdminHome() {
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
  localStorage.removeItem('token');
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
const handleGarden = () => {
  navigate('/garden');
};
const handleMachine = () => {
  navigate('/machine');
};
const handlePest = () => {
  navigate('/upest');
};
const handlePlant = () => {
  navigate('/uplant');
};
const handleReviews = () => {
  navigate('/review');
};
const handleadmindash = () => {
  navigate('/admindash');
};


  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
      <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
        <button onClick={handleadmindash} className='home-buttonp'>Dashboard</button>
      </nav>
      <img src="logo.png" className='logoa'/>
      <div className="video-container">
        <h1 className={isDarkMode ? 'dark-text' : ''}>Fine gardening</h1><br/><br/>
        <p className={isDarkMode ? 'dark-text' : ''}>
        Welcome to Fine Gardening, where gardening meets innovation, sustainability, and community. Our smart home garden system is redefining the way you experience gardening.
         With Fine Gardening, you're not just growing plants; you're cultivating a lifestyle that's environmentally conscious, convenient, and immensely rewarding.
What sets Fine Gardening apart is our commitment to innovation. 
We believe that technology can make your gardening experience easier and more enjoyable. Our smart garden system is designed to put control right at your fingertips. 
Using our user-friendly app, you can monitor and manage your garden remotely, taking the guesswork out of gardening. No more worrying about when to water or whether your plants are getting the right amount of light. 
Fine Gardening automates watering, controls the climate, and manages nutrients, ensuring that your plants thrive year-round.
But we're not just about convenience; we're also about sustainability.
 Our system is designed to help you reduce your environmental footprint. We're passionate about conserving resources, reducing waste, and promoting eco-conscious choices. With Fine Gardening, you can enjoy the satisfaction of homegrown produce while knowing that you're making a positive impact on the environment.
The heart of our system lies in customization. Fine Gardening is tailored to your unique space, lifestyle, and preferences.
 Whether you're growing herbs, flowers, vegetables, or fruits, our smart garden system can be personalized to meet your needs. Your garden is an extension of your personality, and with Fine Gardening, you have the power to design it your way.
Why choose Fine Gardening? It's because we make gardening effortless. 
No more tedious weeding, constant upkeep, or worries about your garden when you're away. Our system takes care of your plants, so you can focus on enjoying the beauty of your garden and the flavors of your homegrown produce.
With Fine Gardening, your garden isn't confined to a single season. We offer year-round gardening delights. Our smart garden system allows you to extend your growing season, providing you with fresh, homegrown goodness even in the depths of winter. 
There's something truly special about enjoying the taste of your garden's harvest all year long.
We don't just sell a product; we offer a community of like-minded garden enthusiasts. Gardening isn't just a hobby; it's a lifestyle. When you join Fine Gardening, you connect with a community of passionate gardeners who share your interests. 
Share your experiences, seek advice, and learn from others who are as dedicated to gardening as you are.<br/><br/> Fine Gardening is more than a smart garden system; it's a hub for gardening inspiration and camaraderie.
Are you ready to experience the Fine Gardening difference? Explore our range of products, from starter kits perfect for beginners to advanced systems tailored for seasoned gardeners.
 Our smart home garden system is the key to unlocking the full potential of your garden. It's a gateway to an easier, more sustainable, and more enjoyable gardening experience.
 As you embark on your Fine Gardening journey, you'll quickly realize that the convenience and control our system offers are unparalleled. Gardening has never been so precise and effortless. 
 Imagine having the ability to adjust lighting, temperature, and watering schedules with just a few taps on your smartphone. Our smart garden system provides you with the tools you need to ensure that each of your plants receives the care it deserves. 
 The days of worrying about whether your garden is thriving are over; with Fine Gardening, you'll have all the data and insights you need to make informed decisions.
Fine Gardening is not just about technology; it's about the people who make up our community. Join our ever-growing family of garden enthusiasts, from novices to seasoned green thumbs. We offer expert support and guidance, ensuring that you have all the knowledge and assistance you need to succeed in your gardening journey. Our team of gardening experts is just a click away, ready to answer your questions and provide advice based on years of experience.
One of the most inspiring aspects of Fine Gardening is the success stories within our community. Real people, just like you, have used our smart home garden system to transform their gardens and their lives. They've gone from having no experience to growing bountiful harvests, from struggling with garden maintenance to enjoying the convenience of a thriving garden. These stories illustrate the possibilities that await you when you choose Fine Gardening.
The Fine Gardening experience is all about exploring the potential of your garden and taking it to new heights. 
Whether you're looking to create a lush flower garden, cultivate a vegetable paradise, or simply enjoy the tranquility of a green space, our smart garden system can help you achieve your goals. <br/><br/>
Your garden, your way-that's our motto.
So, are you ready to take the next step? Join our community, explore our products, and get ready to unlock the full potential of your garden. With Fine Gardening, you're not just growing plants; you're growing a lifestyle that's greener, more convenient, and deeply fulfilling.
Explore our product offerings and take advantage of our innovative smart garden system. Whether you're a gardening novice or a seasoned pro, Fine Gardening has something to offer. Your garden deserves the best, and that's what we're here to provide.
Join us on this incredible journey of discovery, innovation, and community.<br/><br/><i><div className='lastlineh'>Welcome to Fine Gardening, where your garden's future begins today.</div></i>
 </p></div>
      {/* <div className="video-container">
      <video controls autoPlay loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div> */}
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

export default AdminHome;