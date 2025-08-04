import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <div className='logo'>
            <Link to="/" className='logo-link'>
              <span className='logo-text'>Centric</span>
              <span className='logo-dot'>.</span>
              <span className='logo-suffix'>DXB</span>
            </Link>
          </div>
          <ul className='nav-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar