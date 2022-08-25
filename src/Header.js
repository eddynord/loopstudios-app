import React from 'react';
import './index.css';
import logo from "../src/images/logo.svg"



export default Header

function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <div className='logo'><img src= {logo} alt="Logo"/></div>
                <div className='menu'>
                    <a href='index.html'>About</a>
                    <a href='index.html'>Careers</a>
                    <a href='index.html'>Event</a>
                    <a href='index.html'>Products</a>
                    <a href='index.html'>Support</a>
                </div>
            </nav>

            <div className='banner'>
                <div className='banner-content'>
                    <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                </div>
            </div>
        </header>

            

      
            
    )
}