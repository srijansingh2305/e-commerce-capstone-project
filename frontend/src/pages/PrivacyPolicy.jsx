import React from 'react';
import Title from '../components/Title';
import './PrivacyPolicy.css'; // Optional: Create a CSS file for styling

const PrivacyPolicy = () => {
    return (
        <div className='privacy-policy-container'>
            <Title text1={'Privacy'} text2={'Policy'} />
            <div className='privacy-policy-content'>
                <h2>Privacy Policy</h2>
                <p>
                At Wire Wear, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.
                </p>
                <h3>Information We Collect</h3>
                <p>
                We may collect personal information such as your name, email address, phone number, shipping address, and payment information when you make a purchase or sign up for our newsletter. We may also collect non-personal information such as your browsing behavior, preferences, and other analytics.
                </p>
                <h3>How We Use Your Information</h3>
                <p>
                Your information helps us to process your orders, improve our website, and provide you with better customer service. We may also use your information to communicate with you, send promotional offers, and personalize your shopping experience. We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                </p>
                <h3>Data Security</h3>
                <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential. All transactions are processed through a secure gateway provider and are not stored or processed on our servers.
                </p>
                <h3>Cookies</h3>
                <p>
                We use cookies to enhance your experience on our website, including remembering your preferences and login information, and providing personalized content. You can choose to disable cookies through your browser settings, but this may affect your experience on our site.
                </p>
                <h3>Changes to Our Privacy Policy</h3>
                <p>
                We may update this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site. Your continued use of the site after such changes will signify your acceptance of the updated policy.
                </p>
                <h3>Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at contact@wirewear.com.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;