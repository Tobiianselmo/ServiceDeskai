// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/loginSlice';
import './login.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.login);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    if (type === 'admin') {
      navigate('/admin');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, userType }));
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p className="login-title">Select your user type:</p>

      <div className="user-options">
        <button onClick={() => handleUserTypeSelect('standard')} className="user-button">
          Standard User
        </button>
        <button onClick={() => handleUserTypeSelect('serviceDesk')} className="user-button">
          Service Desk User
        </button>
        <button onClick={() => handleUserTypeSelect('admin')} className="user-button">
          Admin User
        </button>
      </div>

      <form onSubmit={handleSubmit} id="loginForm">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
