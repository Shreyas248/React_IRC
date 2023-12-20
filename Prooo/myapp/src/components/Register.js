import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../assets/css/Register.css'; // Import your CSS file for styling

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here (send data to backend, make API calls, etc.)
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add your registration logic here
  };

  const navigate = useNavigate();


  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Register</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="usernamerx"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="emailer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" onClick={() => navigate('/home')}>Register</button>
      </form>
    </div>
  );
};

export default Register;
