import React, { useContext, useEffect, useState } from 'react'; // Importing necessary hooks and libraries
import { ShopContext } from '../context/ShopContext'; // Importing context for shop data
import Title from './Title'; // Importing Title component
import ProductItem from './ProductItem'; // Importing ProductItem component
import './RelatedProducts.css'; // Importing CSS file for styling

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext); // Accessing products from context
    const [related, setRelated] = useState([]); // State to hold related products

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice(); // Making a copy of products array
            productsCopy = productsCopy.filter((item) => category === item.category); // Filtering by category
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory); // Filtering by sub-category
            setRelated(productsCopy.slice(0, 5)); // Setting the first 5 related products
        }
    }, [products]); // Dependency array to trigger effect when products data changes

    return (
        <div className='related-products-container'>
            <div className='header'>
                <Title text1={'RELATED'} text2={"PRODUCTS"} />
            </div>
            <div className='product-grid'>
                {related.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts; // Exporting RelatedProducts component
