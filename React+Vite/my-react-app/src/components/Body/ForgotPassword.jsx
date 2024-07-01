// src/components/Body/ForgotPassword.jsx
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Please check your email.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleResetPassword} className="forgot-password-form">
      <h2>Reset Password</h2>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Email</button>
      <p>Remembered your password? <Link to='/sign-in' className='link'>Sign In</Link></p>
    </form>
  );
};

export default ForgotPassword;
