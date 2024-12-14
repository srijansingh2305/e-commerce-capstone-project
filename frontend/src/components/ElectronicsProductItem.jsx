import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import './ElectronicsProductItem.css';

const ElectronicsProductItem = ({ id, image, name, price, ramSize, storageSize }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link onClick={() => scrollTo(0, 0)} className='product-link' to={`/electronicsproduct/${id}`}>
            <div className='image-container'>
                <img className='product-image' src={image[0]} alt={name} />
            </div>
            <p className='product-name'>{name}</p>
            <p className='product-price'>{currency}{price}</p>
            {/* <p className='product-ram'>RAM: {ramSize.join(', ')}</p>
            <p className='product-storage'>Storage: {storageSize.join(', ')}</p> */}
        </Link>
    );
};

export default ElectronicsProductItem;
