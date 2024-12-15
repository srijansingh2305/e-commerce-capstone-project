import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='about-header'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='about-content'>
                <img className='about-image' src={assets.about_img} alt="" />
                <div className='about-text'>
                    <p>At Wire Wear, we believe that fashion and technology are the perfect pairing to elevate your lifestyle. Born out of a passion for stylish innovation, our ecommerce platform offers a unique blend of cutting-edge electronics and trendsetting fashion. From the latest gadgets to the chicest apparel, we aim to bring you the best of both worlds, making your shopping experience as seamless and enjoyable as possible. Whether you're looking to upgrade your wardrobe or your tech arsenal, Wire Wear is your go-to destination for quality products that stand out in style and performance.</p>
                    <p>Our commitment to excellence is reflected in our curated selection of items, each chosen for their superior design and functionality. We strive to cater to the modern consumer who values both aesthetics and efficiency. At Wire Wear, we are dedicated to providing exceptional customer service and a shopping environment that is intuitive, engaging, and inspiring. Join us on this journey as we merge the realms of fashion and technology, helping you to live a life that's always on trend and ahead of the curve.</p>
                    <b className='mission-title'>Our Mission</b> {/* Section for company mission */}
                    <p>Our mission at Wire Wear is to seamlessly blend fashion and technology, providing our customers with innovative, stylish, and high-quality products. We are dedicated to creating a unique shopping experience that inspires and empowers individuals to express their personal style through both their clothing and their tech choices. Our goal is to be the leading destination for those who seek to combine cutting-edge electronics with trendsetting fashion, all while delivering outstanding customer service and value.</p>
                </div>
            </div>
            <div className='choose-us'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='benefits'>
                <div className='benefit-item'>
                    <b>Quality Assurance:</b>
                    <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='benefit-item'>
                    <b>Convenience:</b>
                    <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className='benefit-item'>
                    <b>Exceptional Customer Service:</b>
                    <p>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>
            <NewsletterBox />
        </div>
    );
}

export default About; // Exporting About component
