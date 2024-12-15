import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
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
      navigate('/');
    }
  }, [token]);

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

export default Login;
