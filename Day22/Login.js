import React, { useState ,useEffect} from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!signInData.email || !signInData.password) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', signInData);
      const { name, token, id, role } = response.data;
      if (role !== "ADMIN") {
        alert("You do not have permission to sign in.");
        return;
      }

      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);
      localStorage.setItem('role',role);

      navigate('/adminhome', { state: { name } });
    } catch (error) {
      console.error(error);
      alert("Sign in failed. Please check your credentials.");
    }
  };
  const handleBack =()=>
  {
    navigate('/');
  }

  const handleInputChange = (e, isSignUpForm) => {
    const name = e.target.name;
    const value = e.target.value;
    
      setSignInData({
        ...signInData,
        [name]: value
      });
    };

useEffect(() => {
  const errorTimeout = setTimeout(() => {
    setUsernameError('');
    setPasswordError('');
  }, 2000);

  return () => {
    clearTimeout(errorTimeout);
  };
}, [usernameError, passwordError]);

  return (
    <div className='loginbody'>
      <button className="home-button" style={{ textAlign: 'center' }}onClick={handleBack}>Back</button>
      <div className='quoteim'><img src="quoteimg.png" alt="quote"></img></div>
    <div className="container1">
      <div className="form1">
        <h1>Admin Login</h1>
        <input
              type="email"
              name="email"
              placeholder="Email"
              value={signInData.email}
              onChange={(e) => handleInputChange(e, false)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signInData.password}
              onChange={(e) => handleInputChange(e, false)}/>
        <button className='loginbutton' onClick={handleLogin}>Login</button>
      </div>
    </div></div>
  );
};

export default Login;
