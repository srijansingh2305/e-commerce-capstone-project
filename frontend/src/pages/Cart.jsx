// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {
//   const { products, electronics, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0 || electronics.length > 0) {
//       const tempData = [];
//       for (const itemId in cartItems) {
//         for (const size in cartItems[itemId]) {
//           if (cartItems[itemId][size] > 0) {
//             const productData = products.find(product => product._id === itemId) || electronics.find(electronic => electronic._id === itemId);
//             if (productData) {
//               tempData.push({
//                 _id: itemId,
//                 size: size,
//                 quantity: cartItems[itemId][size],
//                 isElectronics: !!electronics.find(electronic => electronic._id === itemId),
//                 selectedRamSize: Array.isArray(productData.ramSize) ? productData.ramSize.find(ram => ram === size.split('-')[0]) : null, // Check if ramSize is an array
//                 selectedStorageSize: Array.isArray(productData.storageSize) ? productData.storageSize.find(storage => storage === size.split('-')[1]) : null // Check if storageSize is an array
//               });
//             }
//           }
//         }
//       }
//       setCartData(tempData);
//     }
//   }, [cartItems, products, electronics]);

//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       <div>
//         {
//           cartData.map((item, index) => {
//             const productData = products.find(product => product._id === item._id) || electronics.find(electronic => electronic._id === item._id);

//             if (!productData) {
//               return <div key={index}>Product not found</div>; // Handle missing product
//             }

//             return (
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                 <div className='flex items-start gap-6'>
//                   <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <div className='flex items-center gap-5 mt-2'>
//                       <p>{currency}{productData.price}</p>
//                       <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>
//                         {item.isElectronics 
//                           ? `RAM: ${item.selectedRamSize}, Storage: ${item.selectedStorageSize}` // Display selected RAM and Storage sizes
//                           : item.size}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <input 
//                   onChange={(e) => {
//                     const newValue = Number(e.target.value);
//                     if (newValue > 0) {
//                       updateQuantity(item._id, item.size, newValue);
//                     }
//                   }} 
//                   className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
//                   type="number" 
//                   min={1} 
//                   value={item.quantity} 
//                 />
//                 <img 
//                   onClick={() => updateQuantity(item._id, item.size, 0)} 
//                   className='w-4 mr-4 sm:w-5 cursor-pointer' 
//                   src={assets.bin_icon} 
//                   alt="Remove item" 
//                 />
//               </div>
//             );
//           })
//         }
//       </div>

//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal />
//           <div className='w-full text-end'>
//             <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import './Cart.css';

const Cart = () => {
    const { products, electronics, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

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
    }, [cartItems, products, electronics]);

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
                                        updateQuantity(item._id, item.size, newValue);
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
                <CartTotal />
                <div className='checkout'>
                    <button onClick={() => navigate('/place-order')} className='checkout-button'>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
