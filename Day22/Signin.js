import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signin.css";
import "./Responsive.css";

const Signin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER", 
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!signInData.email || !signInData.password) {
      alert("Please fill in all the fields.");
      // return;
    }

    try {
      const emailParts = signInData.email.split("@");
      const username = emailParts[0];
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        signInData
      );
      const { name, token, id, role } = response.data;

      if (role !== "CUSTOMER") {
        alert("You do not have permission to sign in.");
        return;
      }
      localStorage.setItem("role",role);
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const locationResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bacb834cc85e54f2bf251d01056604d1`
        );

        const { name: locationName } = locationResponse.data;

        const userHistory =
          JSON.parse(localStorage.getItem("userHistory")) || [];
        userHistory.push({
          name: username,
          signInDate: new Date().toLocaleString(),
          location: locationName,
        });
        localStorage.setItem("userHistory", JSON.stringify(userHistory));
        localStorage.setItem("token", token);
        localStorage.setItem("userId", id);
      });

      navigate("/hom", { state: { name: username } });
    } catch (error) {
      console.error(error);
      alert("Sign in failed. Please check your credentials.");
    }
  };
  localStorage.getItem('token');
  localStorage.getItem('role');


  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/auth/register', signUpData);
      alert("Signup Successful. You can now sign in.");
      setIsSignup(false);
    } catch (error) {
      console.error(error);
      alert("Sign up failed. Please try again later.");
    }
  };

  const handleRegister = () => {
    navigate("/admin");
  };

  const handleInputChange = (e, isSignUpForm) => {
    const name = e.target.name;
    const value = e.target.value;

    if (isSignUpForm) {
      setSignUpData({
        ...signUpData,
        [name]: value
      });
    } else {
      setSignInData({
        ...signInData,
        [name]: value
      });
    }
  };
  
  return (
    <div className="Login">
      <img src="logo.png" className="logo"/>
      <button className="home-button" style={{ textAlign: 'center' }}onClick={handleRegister}>Admin</button>
      <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <span>for Fine Gardening</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signUpData.name}
              onChange={(e) => handleInputChange(e, true)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={(e) => handleInputChange(e, true)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={(e) => handleInputChange(e, true)}
            />
            <input
              type="text" 
              name="role"
              placeholder="Role"
              value="CUSTOMER" 
              readOnly 
              onChange={(e) => handleInputChange(e, true)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <>  for Fine Gardening</>
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
              onChange={(e) => handleInputChange(e, false)}
            />

            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome!</h1>
              <p>Already have an account? Login Here</p>
              <button className="ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1><br/>
              Enter your details and Explore in Fine Gardening<br/><br/><br/>
              <button className="ghost" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;