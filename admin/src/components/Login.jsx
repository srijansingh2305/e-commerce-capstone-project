import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import './Login.css';  // Import the CSS file

const Login = ({ setToken }) => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault(); // Prevent default form submission
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
      if (response.data.success) {
        setToken(response.data.token); // Set token on successful login
      } else {
        toast.error(response.data.message); // Display error message
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message); // Display error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="input-wrapper">
            <label htmlFor="email" className="input-label">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="submit-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login; // Exporting Login component
