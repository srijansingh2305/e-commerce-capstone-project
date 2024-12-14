import React from 'react';
import { assets } from '../assets/assets';
import './OurPolicy.css';

const OurPolicy = () => {
    return (
        <div className='policy-container'>
            <div>
                <img src={assets.exchange_icon} className='policy-icon' alt="" />
                <p className='policy-title'>Easy Exchange Policy</p>
                <p className='policy-description'>We offer hassle free exchange policy</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='policy-icon' alt="" />
                <p className='policy-title'>7 Days Return Policy</p>
                <p className='policy-description'>We provide 7 days free return policy</p>
            </div>
            <div>
                <img src={assets.support_img} className='policy-icon' alt="" />
                <p className='policy-title'>Best customer support</p>
                <p className='policy-description'>We provide 24/7 customer support</p>
            </div>
        </div>
    );
}

export default OurPolicy;
