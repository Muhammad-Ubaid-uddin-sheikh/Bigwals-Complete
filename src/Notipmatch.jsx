import React from 'react'
import './App.css'

import WarningIcon from '@mui/icons-material/Warning';
const Notipmatch = () => {
  return (
    <div className="notapimatch">
        
 <div className="row-not-api-fing">
    <div className="colm-not-api-find-icon">< WarningIcon id='icon-id-not-found-IP'/></div>
    <div className="colm-not-api-find"><div className="subdiv-not-api">
        <h1>Temporarily Banned IP Address</h1>
        <p>your IP Address has  been banned  on the follwing services:</p>
        <li>E-mail</li>
        <p>The most common causes for these bans are:</p>
        <li>Excessive login attempts in a short time    </li>
        <li>Excessive login attempts using wrong data   </li>
        <li>Excessive login failed connection attempts to the hosting    </li>
        
        </div></div>
 </div>
    </div>
    
  )
}

export default Notipmatch