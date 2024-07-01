// src/components/Body/SignInForm.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './SignInForm.css';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      if (user.emailVerified) {
        alert('Sign in successful!');
        navigate('/welcome');
      } else {
        setError('Please verify your email before signing in.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSignIn} className="sign-in-form">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
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
       <p>
        Forgot your password? <Link to='/forgot-password'>Reset Password</Link>
      </p>
      <button type="submit">Login</button>
     
      <p>Create account: <Link to='/sign-up' className='link'>Sign Up</Link></p>
    </form>
  );
};

export default SignInForm;
