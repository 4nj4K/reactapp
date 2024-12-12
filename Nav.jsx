import React from 'react'
import silicone from '../assets/images/icons/solid.svg'
import menu from '../assets/images/icons/signin-icon.svg'
import signin from '../assets/images/icons/signin-icon.svg'

const Nav = () => {
  return (
    <nav className="main-nav" aria-label="main navigation">
       <a href="#main" className="skip-link">Skip to main content</a> 

       <div className="container">
            <a href="/">
                <img src={silicone} alt="Silicone logo" />
            </a>

            <div className="darkmode-toggle">
                <p>Dark mode</p>
                <label className="toggle">
                    <input id="darkmode-switch" type="checkbox" onchange="toggleDarkMode()" />
                    <span className="slider"></span>
                </label>
            </div>

            <button className="menu-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
                <img src={menu} alt="Menu button" />   
            </button>


            <ul id="main-menu" className="main-menu">
                <li>
                    <a href="#" className="nav-link">Features</a>
                </li>
                <li>
                    <a href="#" className="btn btn-primary">
                       <img className="user-icon" src={signin} alt="user icon" />
                       <span>Sign in / up</span> 
                    </a>
                </li>
            </ul>

       </div>
    </nav> 
  )
}

export default Nav