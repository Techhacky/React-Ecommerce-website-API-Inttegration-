import React from 'react'
import './Header.css'

function Header() {
  return (
   <header className='header'> 
    <h1 >My Website</h1>
    <button className='logout-button'>Logout</button>
   </header>
  )
}

export default Header