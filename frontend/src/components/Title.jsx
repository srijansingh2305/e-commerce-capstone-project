import React from 'react';
import './Title.css';

const Title = ({ text1, text2 }) => {
    return (
        <div className='title-container'>
            <p className='title-text'>{text1} <span className='title-highlight'>{text2}</span></p> {/* Title with highlighted text */}
            <p className='title-line'></p>
        </div>
    );
}

export default Title; // Exporting Title component
