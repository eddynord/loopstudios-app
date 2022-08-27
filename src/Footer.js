import React from 'react';
import './index.css';
import logo from "../src/images/logo.svg"
import facebook from "../src/images/icon-facebook.svg"
import twitter from "../src/images/icon-twitter.svg"
import pinterest from "../src/images/icon-pinterest.svg"
import instagram from "../src/images/icon-instagram.svg"

export default Footer

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-top'>
                    <div>
                        <img src={logo} alt="Logo"/>
                    </div>

                    <div className='footer-social'>
                        <a href='index.html'><img src={facebook} alt="Facebook Icon"/></a>
                        <a href='index.html'><img src={twitter} alt="Twitter Icon"/></a>
                        <a href='index.html'><img src={pinterest} alt="Pinterest Icon"/></a>
                        <a href='index.html'><img src={instagram} alt="Instagram Icon"/></a>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='footer-menu'>
                        <a href='index.html'>About</a>
                        <a href='index.html'>Careers</a>
                        <a href='index.html'>Event</a>
                        <a href='index.html'>Products</a>
                        <a href='index.html'>Support</a>
                    </div>

                    <div className='copyright'>
                        <p>© 2022 Loopstudios. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
