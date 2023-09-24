import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Home.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';
import {BsFacebook , BsTwitter,BsInstagram} from  'react-icons/bs';

function ContactUs() {
  const { isDarkMode } = useDarkMode();
    const navigate=useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [userMessage, setUserMessage] = useState('');
    const [adminMessage, setAdminMessage] = useState('');
    const [adminReply, setAdminReply] = useState("");
    const [notification, setNotification] = useState(""); 
  const [showNotification, setShowNotification] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
  
      setSuccessMessage("Your message has been sent successfully!");
  
      setName("");
      setEmail("");
      setMessage("");
    };
    
    const sendUserMessage = () => {
        localStorage.setItem('userMessage', message); 
        localStorage.setItem('userName', name); // Store user's name
        localStorage.setItem('userEmail', email); // Store user's email
        setAdminReply('');
        setNotification('Message sent successfully!');
        setShowNotification(true);
      };
    
      const sendAdminReply = () => {
      const adminReplyMessage = adminReply;
      console.log("Admin's Reply:", adminReplyMessage);
      setAdminReply('');
    };

    useEffect(() => {
        const storedAdminReply = localStorage.getItem('adminReply');
        if (storedAdminReply) {
          setAdminReply(storedAdminReply);
        }

        const storedUserMessage = localStorage.getItem('userMessage');
    if (storedUserMessage) {
      setUserMessage(storedUserMessage);
    }
      }, []);

    const handleHomepage = () => {
    navigate('/hom');
    };
    const handlePrivacy = () => {
        navigate('/privacy');
    };
    const handleAbout = () => {
        navigate('/about');
    };
    const handleTerms = () => {
        navigate('/terms');
    };
    const handlefaq = () => {
        navigate('/faq');
    };

    return (
      <div className='contactbody'>
        <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
          <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
            <ul>
            <button className="home-button" onClick={handleHomepage}>Home</button>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleAbout}>About Us</a>
              </li>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''}>Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright1">
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
        <div className='contact'>
     <h1><div className='aboutheading'>Contact  Us</div></h1><br/><br/>
     <p>Email Address:

Email: contact@smarthomegardensystem.com<br/><br/>
Phone Number:+1 (123) 456-7890<br/><br/>
Mailing Address:
123 Green Thumb Lane,Garden City,Plantopia,Growland<br/><br/>
<b>Social Media Links:<br/></b><br/>
<ul>
    <li>
    <BsFacebook className="icons" />
    &nbsp;&nbsp;<a href="https://www.facebook.com/SmartHomeGardenSystem" target="_blank" rel="noopener noreferrer">Facebook: SmartHomeGardenSystem</a><br/><br/></li>
<li>
    <BsTwitter className='icons'/>
    &nbsp;&nbsp;Twitter: <a href="https://twitter.com/SmartGardenSys" target="_blank" rel="noopener noreferrer">@SmartGardenSys</a><br/><br/></li>
<li>
    <BsInstagram className='icons'/>
    &nbsp;&nbsp;Instagram: <a href="https://www.instagram.com/SmartGardenSystem" target="_blank" rel="noopener noreferrer">@SmartGardenSystem</a><br/><br/></li>
</ul></p>

</div>
</div>
<div className="chat-area">
          <h2>Chat</h2>
          <div className="user-info">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="admin-message" placeholder="Admin's reply">{adminReply}</div>
          <textarea
            className="chat-input"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="chat-button" onClick={sendUserMessage}>
            Send
          </button>
        </div>
        {showNotification && (
        <div className="notification-popup">
          {notification}
          <button3 onClick={() => setShowNotification(false)}>&nbsp;&nbsp;×</button3>
        </div>
      )}
</div>
      );
    }
    export default ContactUs;