import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import ElectronicsProductItem from './ElectronicsProductItem'; // Import the electronics product item component
import './BestSeller.css';

/**
 * BestSeller component displays the top 5 best-selling products.
 */
const BestSeller = () => {
    // Get products and electronics from the ShopContext
    const { products, electronics } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    // Filter best-selling products from both products and electronics on component mount
    useEffect(() => {
        // Combine products and electronics into a single array
        const bestProduct = [
            ...products.filter((item) => item.bestseller),
            ...electronics.filter((item) => item.bestseller)
        ];
        // Limit the best-selling products to 5 items
        setBestSeller(bestProduct.slice(0, 5));
    }, [products, electronics]); // Re-run the effect when products or electronics change

    return (
        <div className='best-seller-container'>
            <div className='header'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>
            <div className='product-grid'>
                {bestSeller.map((item, index) => (
                    // Render ElectronicsProductItem for electronics and ProductItem for other products
                    item.category === 'Electronics' ? (
                        <ElectronicsProductItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                            ramSize={item.ramSize} 
                            storageSize={item.storageSize} 
                        />
                    ) : (
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                        />
                    )
                ))}
            </div>
        </div>
    );
}

export default BestSeller;