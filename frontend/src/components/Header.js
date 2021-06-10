import React from 'react'
import logo from '../logo.svg'
import NavLinks from './NavLinks'

const Header = () => {
    return (
        <div>
          <p>
            <img src={logo} className="app-logo" alt="logo" /><span>Race Stats Tracker</span>
          </p>
          <NavLinks />
        </div>
    )
}

export default Header