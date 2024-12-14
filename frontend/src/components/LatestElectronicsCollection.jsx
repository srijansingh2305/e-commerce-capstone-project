import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ElectronicsProductItem from './ElectronicsProductItem'; // Import your electronics product item component
import './LatestElectronicsCollection.css'; // Create a CSS file for styling

const LatestElectronicsCollection = () => {
    const { electronics } = useContext(ShopContext);
    const [latestElectronics, setLatestElectronics] = useState([]);

    useEffect(() => {
        setLatestElectronics(electronics.slice(0, 10)); // Adjust the number as needed
    }, [electronics]);

    return (
        <div className='latest-electronics-collection-container'>
            <div className='header'>
                <Title text1={'LATEST'} text2={'ELECTRONICS'} />
                <p className='description'>
                    Discover the latest in electronics.
                </p>
            </div>
            <div className='product-grid'>
                {latestElectronics.map((item, index) => (
                    <ElectronicsProductItem 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                        ramSize={item.ramSize} 
                        storageSize={item.storageSize} 
                    />
                ))}
            </div>
        </div>
    );
}

export default LatestElectronicsCollection;