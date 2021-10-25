import React from 'react'
import classnames from 'classnames'
import './Info.css';

const Info = ({id, prop, value}) =>
  <li className={classnames("Info", prop, {
    active: (prop === 'state' && value === 'ACTIVE') || 
      ((prop === 'exterior' || prop === 'interior') && value === 'GOOD'),
    }, { state: prop === 'exterior' || prop === 'interior'})}
  >
    {(!['state', 'fuel'].includes(prop)) && (`${prop}: ${value}`)}
    {(prop === 'fuel') && (<div>
      <input type="range" readOnly="readonly" id={id} name="fuel" 
            min="0" max="100" value={value} step="10"/>
      <label htmlFor={id}>{value}</label>
    </div>)}
  </li>
         
export default Info;
