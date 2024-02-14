"use client";

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../../public/assets/mc_logo.svg'
import contact from '../../../public/assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <nav className='navbar'>
            <Image src={logo} alt="Logo" className='nav-logo' />
            <label className="hamburger nav-hamburger" >
                <input type="checkbox" onClick={toggleNav} />
                <svg viewBox="0 0 32 32" className='menu-svg'>
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            {(toggleMenu || screenWidth >= 680) && (<>
                <div className='nav-menu'>
                    <Link className="nav-link" to='navbar'>Home</Link>
                    <Link className="nav-link" to='about'>About</Link>
                    <Link className="nav-link" to='skills'>Skills</Link>
                    <Link className="nav-link" to='portfolio'>Portfolio</Link>
                    {(toggleMenu && screenWidth < 680) && (<Link to='contact'><button id='nav-btn1' className='nav-button'>
                        <Image src={contact} alt='contact' width={25} /> Contact Me </button></Link>)}
                </div>
            </>)}
            {(screenWidth >= 680) && (<Link to='contact'> <button className='nav-button'>
                <Image src={contact} alt='contact' width={25} /> Contact Me </button></Link>)}
        </nav>
    )
}

export default Navbar