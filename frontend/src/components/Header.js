import React from 'react'
import logo from '../assets/logo.svg'
import NavLinks from './NavLinks'
import './Header.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="app-header-container">
            <Router>
                <div><Link to="/"><img src={logo} className="app-logo" alt="logo" /><span>Race Stats Tracker</span></Link></div>
                <div><NavLinks /></div>
            </Router>
        </div>
    )
}

export default Header