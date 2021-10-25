import React from 'react'

import Share from '../Share/Share';
import Free from '../Free/Free';
import Info from '../Info/Info.js';
import './List.css';

const List = ({shares, frees, isFreeView}) => 
  <ul className="List">
    {!isFreeView && shares && shares.map(({id, ...restProps}, index) =>
      <Share key={`${id}_${index}`} id={id}>
        {Array.from(Object.entries(restProps))
          .map(([key, value], i) => 
            <Info key={`${id}_${index}_${i}`} prop={key} value={value} />)
        }
      </Share>)}

      
    {isFreeView && frees && frees.map(({id: freeId, ...freeProps}, index) =>
      <Free key={`${freeId}_${index}`} id={freeId} {...freeProps}>
        {Object.entries(freeProps)
          .map(([key, value], i, theProps) => 
            !key.includes('coordinate') &&
              <Info key={`${freeId}_${index}_${i}`} id={`${freeId}_${index}`} prop={key} value={value} />
          )
        }
      </Free>)}

  </ul>

export default List;
