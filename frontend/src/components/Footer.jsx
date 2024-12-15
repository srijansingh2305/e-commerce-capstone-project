import React from 'react'; // Importing React library
import { assets } from '../assets/assets'; // Importing assets
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import './Footer.css'; // Importing CSS file for styling

const Footer = () => {
    return (
        <div className='footer-container'> {/* Main container for the footer */}
            <div className='footer-grid'> {/* Grid layout for organizing footer content */}
                <div>
                    <img src={assets.logo} className='footer-logo' alt="" /> {/* Company logo */}
                    <p className='footer-description'>
                        Your one-stop shop for the latest in fashion and technology. Discover trendsetting apparel and cutting-edge electronics to elevate your lifestyle. Follow us on social media for updates, exclusive deals, and more.
                    </p>
                    <p className='footer-description'>
                        Stay Stylish. Stay Connected.
                    </p>
                    <ul className='footer-list'> {/* Social media links */}
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <p className='footer-title'>COMPANY</p>
                    <ul className='footer-list'> {/* Company-related links */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='footer-title'>GET IN TOUCH</p>
                    <ul className='footer-list'> {/* Contact information */}
                        <li>+91 829949979</li>
                        <li>contact@wirewear.com</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'> {/* Bottom section of the footer */}
                <hr />
                <p className='footer-copyright'> 2024 Wire Wear. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer; // Exporting Footer component
