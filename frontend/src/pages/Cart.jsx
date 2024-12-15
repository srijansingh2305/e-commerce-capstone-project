import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import './Cart.css';

const Cart = () => {
    const { products, electronics, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext); // Accessing context values
    const [cartData, setCartData] = useState([]); // State to hold cart data

    useEffect(() => {
        if (products.length > 0 || electronics.length > 0) {
            const tempData = [];
            for (const itemId in cartItems) {
                for (const size in cartItems[itemId]) {
                    if (cartItems[itemId][size] > 0) {
                        const productData = products.find(product => product._id === itemId) || electronics.find(electronic => electronic._id === itemId);
                        if (productData) {
                            tempData.push({
                                _id: itemId,
                                size: size,
                                quantity: cartItems[itemId][size],
                                isElectronics: !!electronics.find(electronic => electronic._id === itemId),
                                selectedRamSize: Array.isArray(productData.ramSize) ? productData.ramSize.find(ram => ram === size.split('-')[0]) : null,
                                selectedStorageSize: Array.isArray(productData.storageSize) ? productData.storageSize.find(storage => storage === size.split('-')[1]) : null
                            });
                        }
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartItems, products, electronics]); // Update cart data when cart items, products, or electronics change

    return (
        <div className='cart-container'>
            <div className='cart-title'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>
            <div>
                {cartData.map((item, index) => {
                    const productData = products.find(product => product._id === item._id) || electronics.find(electronic => electronic._id === item._id);

                    if (!productData) {
                        return <div key={index}>Product not found</div>;
                    }

                    return (
                        <div key={index} className='cart-item'>
                            <div className='item-details'>
                                <img className='item-image' src={productData.image[0]} alt={productData.name} />
                                <div>
                                    <p className='item-name'>{productData.name}</p>
                                    <div className='item-meta'>
                                        <p>{currency}{productData.price}</p>
                                        <p className='item-size'>
                                            {item.isElectronics 
                                                ? `RAM: ${item.selectedRamSize}, Storage: ${item.selectedStorageSize}`
                                                : item.size}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <input 
                                onChange={(e) => {
                                    const newValue = Number(e.target.value);
                                    if (newValue > 0) {
                                        updateQuantity(item._id, item.size, newValue); // Update quantity when changed
                                    }
                                }} 
                                className='item-quantity' 
                                type="number" 
                                min={1} 
                                value={item.quantity} 
                            />
                            <img 
                                onClick={() => updateQuantity(item._id, item.size, 0)} 
                                className='item-remove' 
                                src={assets.bin_icon} 
                                alt="Remove item" 
                            />
                        </div>
                    );
                })}
            </div>
            <div className='cart-total'>
                <CartTotal /> {/* Display cart total */}
                <div className='checkout'>
                    <button onClick={() => navigate('/place-order')} className='checkout-button'>PROCEED TO CHECKOUT</button> {/* Proceed to checkout button */}
                </div>
            </div>
        </div>
    );
}

export default Cart; // Exporting Cart component
