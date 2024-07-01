// src/components/App.jsx
import React from 'react';
import SignUpForm from './Body/SignUpForm';
import SignInForm from './Body/SignInForm';
import Welcome from './Body/Welcome';
import Header from './Header/Header';
import BGR from './Body/BGR';
import Home from './Body/Home';
import ForgotPassword from './Body/ForgotPassword';
import {BrowserRouter, Routes, Route,Router } from 'react-router-dom';


const App = () => {
  return (
    <div className="app">
     
     
      
      
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/bgr" element={<BGR />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
