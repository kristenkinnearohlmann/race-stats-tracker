import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="nav">
            <NavLink to="/races/new" exact className="nav-link-base">Add a Race</NavLink>
            <NavLink to="/races" exact className="nav-link-base">Races</NavLink>
            <NavLink to="/about" exact className="nav-link-base">About</NavLink>
            <NavLink to="/" exact className="nav-link-base">Home</NavLink>
        </div>
    )
}

export default NavLinks