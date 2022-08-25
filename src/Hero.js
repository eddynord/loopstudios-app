import React from 'react';
import './index.css';
import hero from "../src/images/image-interactive.jpg"


export default Hero
function Hero() {
    return(
        <div className='hero-section'>
            <div className='hero-content'>
                <div className='hero-image'>
                    <img src={hero} alt="Hero"/>
                </div>
                <div className='hero-desc'>
                    <h1>THE LEADER IN INTERACTIVE VR</h1>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual 
                        reality projects for some of the companies around the globe. Our award-winning 
                        creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </div>
        </div>
    )
}