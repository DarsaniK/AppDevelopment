import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate=useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };
  const navigateToDashboard = () => {
    navigate('/hom');
  };
  return (
    <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form action="">
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>SignUp</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>
          <button onClick={navigateToDashboard}> Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start the journey with us</p>
            <button className="ghost" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;