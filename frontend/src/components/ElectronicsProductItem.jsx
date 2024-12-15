import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import './ElectronicsProductItem.css';

/**
 * ElectronicsProductItem component displays a single electronics product item.
 * 
 * @param {object} props 
 * @param {number} props.id - Unique identifier for the product.
 * @param {array} props.image - Array of image URLs for the product.
 * @param {string} props.name - Name of the product.
 * @param {number} props.price - Price of the product.
 * 
 * @returns {JSX.Element} - JSX element representing the product item.
 */
const ElectronicsProductItem = ({ id, image, name, price}) => {
    // Get the currency from the ShopContext
    const { currency } = useContext(ShopContext);

    return (
        // Link to the product details page
        <Link onClick={() => window.scrollTo(0, 0)} className='product-link' to={`/electronicsproduct/${id}`}>
            <div className='image-container'>
                {/* Display the first image of the product */}
                <img className='product-image' src={image[0]} alt={name} />
            </div>
            {/* Display the product name */}
            <p className='product-name'>{name}</p>
            {/* Display the product price with the selected currency */}
            <p className='product-price'>{currency}{price}</p>
        </Link>
    );
};

export default ElectronicsProductItem;