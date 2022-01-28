import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <h1>ventilation <span>calculator</span></h1>
            <ul className='nav-links'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/app/login">new project</Link></li>
                <li><Link to="/">contact</Link></li>
                <li><Link to="/app/login">login</Link></li>
            </ul>
        </div>
    )
}

export default Header
