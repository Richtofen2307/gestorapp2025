import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__navegation'>
                <ul className='header__list'>
                    <li className='header__item'><Link to="/home">Home</Link></li>
                    <li className='header__item'><Link to="/dashboard">Dashboard</Link></li>
                    <li className='header__item'><Link to="/booking">Booking</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header