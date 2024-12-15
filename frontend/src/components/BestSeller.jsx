// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import './BestSeller.css';

// const BestSeller = () => {
//     const { products } = useContext(ShopContext);
//     const [bestSeller, setBestSeller] = useState([]);

//     useEffect(() => {
//         const bestProduct = products.filter((item) => item.bestseller);
//         setBestSeller(bestProduct.slice(0, 5));
//     }, [products]);

//     return (
//         <div className='best-seller-container'>
//             <div className='header'>
//                 <Title text1={'BEST'} text2={'SELLERS'} />
//                 <p className='description'>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//                 </p>
//             </div>
//             <div className='product-grid'>
//                 {bestSeller.map((item, index) => (
//                     <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default BestSeller;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import ElectronicsProductItem from './ElectronicsProductItem'; // Import the electronics product item component
import './BestSeller.css';

const BestSeller = () => {
    const { products, electronics } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // Filter best-selling products from both products and electronics
        const bestProduct = [
            ...products.filter((item) => item.bestseller),
            ...electronics.filter((item) => item.bestseller)
        ];
        setBestSeller(bestProduct.slice(0, 5)); // Limit to 5 items
    }, [products, electronics]);

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