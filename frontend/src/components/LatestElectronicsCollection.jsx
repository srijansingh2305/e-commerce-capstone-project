import React, { useContext, useEffect, useState } from 'react'; // Importing necessary hooks and libraries
import { ShopContext } from '../context/ShopContext'; // Importing context for shop data
import Title from './Title'; // Importing Title component
import ElectronicsProductItem from './ElectronicsProductItem'; // Importing electronics product item component
import './LatestElectronicsCollection.css'; // Importing CSS file for styling

const LatestElectronicsCollection = () => {
    const { electronics } = useContext(ShopContext); // Accessing electronics data from context
    const [latestElectronics, setLatestElectronics] = useState([]); // State to hold the latest electronics

    useEffect(() => {
        setLatestElectronics(electronics.slice(0, 10)); // Setting the latest electronics, adjusting the number as needed
    }, [electronics]); // Dependency array to trigger effect when electronics data changes

    return (
        <div className='latest-electronics-collection-container'> {/* Main container for the collection */}
            <div className='header'> {/* Header section with title and description */}
                <Title text1={'LATEST'} text2={'ELECTRONICS'} />
                <p className='description'>
                    Discover the latest in electronics.
                </p>
            </div>
            <div className='product-grid'> {/* Grid for displaying product items */}
                {latestElectronics.map((item, index) => (
                    <ElectronicsProductItem 
                        key={index} // Unique key for each item
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

export default LatestElectronicsCollection; // Exporting LatestElectronicsCollection component
