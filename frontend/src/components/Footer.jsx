import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-grid'>
                <div>
                    <img src={assets.logo} className='footer-logo' alt="" />
                    <p className='footer-description'>
                    Your one-stop shop for the latest in fashion and technology. Discover trendsetting apparel and cutting-edge electronics to elevate your lifestyle. Follow us on social media for updates, exclusive deals, and more.
                    </p>
                    <p className='footer-description'>
                    Stay Stylish. Stay Connected.
                    </p>
                </div>
                <div>
                    <p className='footer-title'>COMPANY</p>
                    <ul className='footer-list'>
                        <li><Link to="/">Home</Link></li> {/* Make Home a clickable link */}
                        <li><Link to="/about">About us</Link></li> {/* Make About us a clickable link */}
                        <li><Link to ="/privacy-policy">Privacy Policy</Link></li> {/* Make Privacy Policy a clickable link */}

                    </ul>
                </div>
                <div>
                    <p className='footer-title'>GET IN TOUCH</p>
                    <ul className='footer-list'>
                        <li>+91 829949979</li>
                        <li>contact@wirewear.com</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <hr />
                <p className='footer-copyright'>© 2024 Wire Wear. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
