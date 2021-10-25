import React from 'react'
import './Share.css';

const Share = ({id, children}) => 
    <li className="Share">  
        <div className="Id">Share-now id: {id}</div>
        <ul>
          {children}
        </ul>
    </li>

export default Share;
