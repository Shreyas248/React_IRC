// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import {Link, useNavigate} from 'react-router-dom';
// import '../assets/css/Login.css'; // Import your CSS file for styling

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
//   const navigate = useNavigate();
//   const Notify = () => toast.success("Login Successful");
  
//   const handleLogin = (e) => {
//     alert("Login successful");
//     e.preventDefault();
//     console.log('Username:', username);
//     console.log('Password:', password);
//     navigate("/home");
//   };
  
  
//   const handleRegister = () => {
//     navigate("/register")
//   };


//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2>Login</h2>
//         <div className="input-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" onClick={handleLogin}>Login</button>
//       </form>
//       <div className="register-section">
//         <p>Don't have an account?</p>
//         <button onClick={handleRegister}>Register Now</button>
//       </div>
//       <ToastContainer
//             position="top-center"
//             autoClose={4000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//         />
//     </div>
//   );
// };

// export default Login;






import React, { useState } from "react";
// import "../Assets/Login.css";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import LRNav from "./LRNav";
// import { Toaster, toast } from "react-hot-toast";

function Login() {
  const move = useNavigate();
  const [name, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, pass }),
      });

      if (response.ok) {
        // User authenticated successfully
        localStorage.setItem("Username", name); // Store token in localStorage
        move("/Home");
      } else {
        // Error logging in
        const errorMessage = await response.text();
        alert(errorMessage); // Display error message from server
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const show = () => {
    move("/Register");
  };

  return (
    <div className="v1">
      {/* <LRNav /> */}
      <body className="b1">
        <form className="container" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            name=""
            id="name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            className="name"
            placeholder="Name"
            required
          />

          <input
            type="password"
            name=""
            id="pass"
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
            className="name"
            placeholder="Password"
            required
          />

          <button className="btn1">Login</button>
          {alertMessage && <div className="alert">{alertMessage}</div>}

          <button className="btn1" onClick={show}>
            Register
          </button>

          {/* <h1> Username : admin</h1>
          <h1> Password : 123</h1> */}
        </form>
      </body>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}

export default Login;