import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

function Welcom() {
  return (
    <div className="welcome-container">
       <h1>WELCOME TO CNK-BGR</h1>

      <Link to='/bgr'  className="get-started-button"> Get Start</Link>
      
    </div>
  
  )
}

export default Welcom