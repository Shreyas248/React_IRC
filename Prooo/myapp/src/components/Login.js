import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../assets/css/Login.css'; // Import your CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (validate username and password, make API calls, etc.)
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your login logic here and redirect the user upon successful login
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

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
        <button type="submit" onClick={() => navigate('/')}>Login</button>
      </form>
      <div className="register-section">
        <p>Don't have an account?</p>
        <button onClick={() => navigate('/register')}>Register Now</button>
      </div>
    </div>
  );
};

export default Login;
