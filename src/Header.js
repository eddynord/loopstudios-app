import React from 'react';
import './index.css';
import logo from "../src/images/logo.svg"


export default Header

function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <div className='logo'><img src= {logo}/></div>
                <div className='menu'>
                    <a href='#'>About</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Event</a>
                    <a href='#'>Products</a>
                    <a href='#'>Support</a>
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