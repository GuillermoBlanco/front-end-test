import React from 'react'
import './Free.css';

const Free = ({id, children}) => 
    <li key={id} className="Free">  
        <div className="Id">Free-now id: {id}</div>
          <ul>
          {children}
          </ul>
    </li>

export default Free;
