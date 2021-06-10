import React from 'react'
import logo from '../logo.svg'
import NavLinks from './NavLinks'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="app-header-container">
            <div><Link to="/"><img src={logo} className="app-logo" alt="logo" /><span>Race Stats Tracker</span></Link></div>
            <div><NavLinks /></div>
        </div>
    )
}

export default Header