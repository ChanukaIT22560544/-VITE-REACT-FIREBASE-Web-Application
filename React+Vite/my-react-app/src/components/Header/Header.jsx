// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        
        
      <nav> 
          <j className='H'> <Link to='/'>CNK-BGR</Link></j>
          <Link to="/"><button className='B'>Home</button></Link>
          <Link to="/sign-in"><button className='b'>Sign In</button></Link>
          <Link to="/sign-up"><button className='b'>Sign Up</button></Link>
          <Link to='/sign-in'><button className='b'>Logout</button>  </Link>
       
      </nav>
    </header>

  );
};

export default Header;
