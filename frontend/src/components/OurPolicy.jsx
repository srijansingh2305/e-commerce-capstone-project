import React from 'react'; // Importing React library
import { assets } from '../assets/assets'; // Importing assets
import './OurPolicy.css'; // Importing CSS file for styling

const OurPolicy = () => {
    return (
        <div className='policy-container'> {/* Main container for the policy section */}
            <div>
                <img src={assets.exchange_icon} className='policy-icon' alt="" /> {/* Icon for exchange policy */}
                <p className='policy-title'>Easy Exchange Policy</p> {/* Title for exchange policy */}
                <p className='policy-description'>We offer hassle free exchange policy</p> {/* Description for exchange policy */}
            </div>
            <div>
                <img src={assets.quality_icon} className='policy-icon' alt="" /> {/* Icon for return policy */}
                <p className='policy-title'>7 Days Return Policy</p> {/* Title for return policy */}
                <p className='policy-description'>We provide 7 days free return policy</p> {/* Description for return policy */}
            </div>
            <div>
                <img src={assets.support_img} className='policy-icon' alt="" /> {/* Icon for customer support */}
                <p className='policy-title'>Best customer support</p> {/* Title for customer support */}
                <p className='policy-description'>We provide 24/7 customer support</p> {/* Description for customer support */}
            </div>
        </div>
    );
}

export default OurPolicy; // Exporting OurPolicy component
