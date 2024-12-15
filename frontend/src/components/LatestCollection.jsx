import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import './LatestCollection.css';

const LatestCollection = () => {
    // Get products from the ShopContext
    const { products } = useContext(ShopContext);
    // Initialize state to store the latest products
    const [latestProducts, setLatestProducts] = useState([]);

    // Update latest products when the products in the context change
    useEffect(() => {
        // Slice the first 10 products from the products array
        setLatestProducts(products.slice(0, 5));
    }, [products]);

    return (
        <div className='latest-collection-container'>
            <div className='header'>
                <Title text1={'LATEST'} text2={'IN FASHION'} />
                <p className='description'>
                    Discover the newest trends and must-have styles in our latest collection of fashion-forward clothing.
                </p>
            </div>
            {/* Rendering Products */}
            <div className='product-grid'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;
