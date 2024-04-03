import React, { useState } from "react";
// import "../Assets/Register.css";
import { useNavigate } from "react-router-dom";
// import LRNav from "./LRNav";
// import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    email: "",
    pass: "",
    cpass: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const signup = async (event) => {
    event.preventDefault();

    if (formData.pass !== formData.cpass) {
      alert("Password does not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        formData
      );
      alert(response.data);
      // navigate("/Home");
    } catch (error) {
      if (
        error.response?.status === 400 &&
        error.response.data === "Username already exists!"
      ) {
        alert("Username already exists!");
      } else {
        alert(
          "Registration failed: " + (error.response?.data || "Unknown error")
        );
      }
    }
  };

  const handleBack = () => {
    navigate("/Login");
  };

  return (
    <div className="abc">
      {/* <LRNav /> */}
      <div className="b2">
        <form className="container1" onSubmit={signup}>
          <h2>Register</h2>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="name"
            placeholder="Username"
            required
          />

          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="name"
            placeholder="Phone No"
            required
          />

          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="name"
            placeholder="Age"
            required
          />

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="name"
            placeholder="Email"
            required
          />

          <input
            type="password"
            id="pass"
            value={formData.pass}
            onChange={handleChange}
            className="name"
            placeholder="Password"
            required
          />

          <input
            type="password"
            id="cpass"
            value={formData.cpass}
            onChange={handleChange}
            className="name"
            placeholder="Confirm Password"
            required
          />

          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="name"
            placeholder="Address"
            required
          />

          <button className="btnn">Register</button>
          <button className="btnn" onClick={handleBack}>
            Back
          </button>
        </form>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
}

export default Register;