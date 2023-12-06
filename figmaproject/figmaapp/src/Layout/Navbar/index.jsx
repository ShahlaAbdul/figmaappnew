import React from 'react'
import './style.css'

function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <div className='navbarText'>
                <h2>Where in the World</h2>
            </div>
            <div className='navbarIcon'>
            <i class="fa-solid fa-moon"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar