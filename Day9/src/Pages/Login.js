import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enteredData, setEnteredData] = useState([]);
  const [usernameError, setUsernameError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate=useNavigate();
  const handleLogin = () => {
    setUsernameError('');

    if (username === 'admin@gmail.com' && password === '123456') {
      setIsLoggedIn(true);
      navigate('/admindash');
    } else {
      if (!username) {
        setUsernameError('Please fill in all email field');
      }

      if (!password) {
      }
      if(username!='admin@gmail.com'|| password!='123456')
      {
        setUsernameError('Enter correct email and password');
      }
    }
  };

  return (
    <div className='loginbody'>
      <div className='quoteim'><img src="quoteimg.png" alt="quote"></img></div>
    <div className="container1">
      <div className="form1">
        <h1>Login</h1>
        {usernameError && <p className="error">{usernameError}</p>}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className='loginbutton' onClick={handleLogin}>Login</button>
      </div>
    </div></div>
  );
};

export default Login;
