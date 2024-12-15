import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login'); // State to manage current form (Login/Sign Up)
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext); // Accessing context values

  const [name, setName] = useState(''); // State for name input
  const [password, setPassword] = useState(''); // State for password input
  const [email, setEmail] = useState(''); // State for email input

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token); // Save token in local storage
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token); // Save token in local storage
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/'); // Navigate to home page if token is set
    }
  }, [token]); // Dependency array to trigger effect when token changes

  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      <div className="form-header">
        <p className="form-title">{currentState}</p>
        <hr className="form-divider" />
      </div>

      {currentState === 'Login' ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="form-input"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="form-input"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="form-input"
        placeholder="Password"
        required
      />

      <div className="form-footer">
        <p className="forgot-password">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="form-toggle">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="form-toggle">
            Login Here
          </p>
        )}
      </div>

      <button className="form-button">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login; // Exporting Login component
