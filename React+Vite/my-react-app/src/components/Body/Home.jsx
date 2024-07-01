import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

function home() {
  return (
    <div><h1>CNK-BGR</h1>
    <t >AI Powered Image Background Remover.</t><br></br>
    <t >Remove Background By 5s.</t><br></br>
    <t >98% Accuracy.</t>
    <Link to='/sign-in'><button className='G'>Get Start</button>  </Link>
    
   
    
    </div>
    
    
  )
}

export default home