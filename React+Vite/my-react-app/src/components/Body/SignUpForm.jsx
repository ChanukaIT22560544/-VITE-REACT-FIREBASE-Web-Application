// src/components/Body/SignUpForm.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase';
import './SignUpForm.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] =useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      setMessage('Sign up successful! Please check your email for verification.');
      setTimeout(() => navigate('/sign-in'), 2000); // Navigate after a short delay to let user read the message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="sign-up-form">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      {message && <p className="message">{message}</p>}
      <label>UserName:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
       <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to='/sign-in' className='link'>Sign in</Link></p>
    </form>
  );
};

export default SignUpForm;
