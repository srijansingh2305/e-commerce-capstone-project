import React, { useContext } from 'react'; // Importing necessary hooks and libraries
import { ShopContext } from '../context/ShopContext'; // Importing context for shop data
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import './ProductItem.css'; // Importing CSS file for styling

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext); // Accessing currency from context

    return (
        <Link onClick={() => scrollTo(0, 0)} className='product-link' to={`/product/${id}`}> {/* Link to product details page */}
            <div className='image-container'>
                <img className='product-image' src={image[0]} alt={name} /> 
            </div>
            <p className='product-name'>{name}</p> 
            <p className='product-price'>{currency}{price}</p> 
        </Link>
    );
}

export default ProductItem; // Exporting ProductItem component
