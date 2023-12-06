import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function FlagCard({name,flag,population,capital}) {
  
  return (
    <div>
        <div className='card_container'>
            <div className='card_info'>
                <ul key={uuidv4()}>
                     <img src={flag} alt="" />
                    <li> country: {name}</li>
                    <li>population:{population}</li>
                    <li>Capital:{capital}</li>
                </ul>
            </div>
            
        </div>

    </div>
  )
}

export default FlagCard