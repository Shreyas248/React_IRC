import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate} from 'react-router-dom';
import '../assets/css/Login.css'; // Import your CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const Notify = () => toast.success("Login Successful");
  
  const handleLogin = (e) => {
    alert("Login successful");
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    navigate("/home");
  };
  
  
  const handleRegister = () => {
    navigate("/register")
  };


  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
      <div className="register-section">
        <p>Don't have an account?</p>
        <button onClick={handleRegister}>Register Now</button>
      </div>
      <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>
  );
};

export default Login;
