import React from 'react'
import logo from '../logo.svg'
import NavLinks from './NavLinks'
import './Header.css'

const Header = () => {
    return (
        <div className="app-header-container">
            <div><img src={logo} className="app-logo" alt="logo" /><span>Race Stats Tracker</span></div>
            <div><NavLinks /></div>
        </div>
    )
}

export default Header