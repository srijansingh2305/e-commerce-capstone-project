import React from 'react';
import { assets } from '../assets/assets';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            {/* Hero Left Side */}
            <div className='hero-left'>
                <div className='hero-text'>
                    <div className='hero-bestsellers'>
                        <p className='bestsellers-line'></p>
                        {/* <p className='bestsellers-text'>OUR BESTSELLERS</p> */}
                    </div>
                    <h1 className='hero-title'>Stay Stylish. Stay Connected.</h1>
                    <div className='hero-shop-now'>
                        <p className='shop-now-text'>SHOP NOW</p>
                        <p className='shop-now-line'></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <img className='hero-image' src={assets.hero_img} alt="" />
        </div>
    );
}

export default Hero;
