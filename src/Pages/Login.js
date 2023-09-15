import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enteredData, setEnteredData] = useState([]);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');

    if (!username) {
      setUsernameError('Please fill in this field');
    }

    if (!password) {
      setPasswordError('Please fill in this field');
    }

    if (username && password) {
      setEnteredData([...enteredData, { username, password }]);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      <div className='quoteim'><img src="quoteimg.png"></img></div>
    <div className="container">
      <div className="form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <p className="error">{usernameError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>}
        <button onClick={handleLogin}>Login</button>
        <div className='noacc'><p>Don't have an account?<Link to ="signup"><b>Signup</b></Link></p></div>
      </div>
    </div></div>
  );
};

export default Login;
