// till this code the order.jsx was working fine so if any issue use this code


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';



// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);


// const loadOrderData = async () => {
//   try {
//       if (!token) {
//           return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
//       if (response.data.success) {
//           let allOrdersItem = [];
//           response.data.orders.map((order) => {
//               order.items.map((item) => {
//                   item['status'] = order.status;
//                   item['payment'] = order.payment;
//                   item['paymentMethod'] = order.paymentMethod;
//                   item['date'] = order.date;

//                   // Check if the item is electronics and assign values accordingly
//                   if (item.isElectronics) {
//                       item['ramSize'] = item.ramSize || 'N/A'; // Default to 'N/A' if null
//                       item['storageSize'] = item.storageSize || 'N/A'; // Default to 'N/A' if null
//                       item['size'] = 'N/A'; // Set size to 'N/A' for electronics
//                   } else {
//                       // For non-electronics, we need to set the size based on the available sizes
//                       item['size'] = item.size || (item.sizes && item.sizes.length > 0 ? item.sizes[0] : 'N/A'); // Default to the first available size or 'N/A'
//                       item['ramSize'] = 'N/A'; // Set ramSize to 'N/A' for non-electronics
//                       item['storageSize'] = 'N/A'; // Set storageSize to 'N/A' for non-electronics
//                   }

//                   allOrdersItem.push(item);
//               });
//           });
//           setOrderData(allOrdersItem.reverse());
//       }
//   } catch (error) {
//       console.error("Error loading order data:", error);
//   }
// };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       <div>
//         {orderData.map((item, index) => (
//           <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//             <div className='flex items-start gap-6 text-sm'>
//               <img className='w-16 sm:w-20' src={item.image && item.image.length > 0 ? item.image[0] : 'default_image_url'} alt={item.name} />
//               <div>
//                 <p className='sm:text-base font-medium'>{item.name}</p>
//                 <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                   <p>{currency}{item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>
//                     Size: {item.isElectronics 
//                       ? `RAM: ${item.ramSize}, Storage: ${item.storageSize}` 
//                       : item.size || 'N/A'}
//                   </p>
//                 </div>
//                 <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
//                 <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
//               </div>
//             </div>
//             <div className='md:w-1/2 flex justify-between'>
//               <div className='flex items-center gap-2'>
//                 <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                 <p className='text-sm md:text-base'>{item.status}</p>
//               </div>
//               <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
//                 Track Order
//               </button> 
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default Orders;

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
//       if (response.data.success) {
//         let allOrdersItem = [];
//         response.data.orders.map((order) => {
//           order.items.map((item) => {
//             // Add additional fields for electronics
//             item['status'] = order.status;
//             item['payment'] = order.payment;
//             item['paymentMethod'] = order.paymentMethod;
//             item['date'] = order.date;

//             // Ensure ramSize and storageSize are included if the item is electronics
//             if (item.isElectronics) {
//               item['ramSize'] = item.ramSize || 'N/A'; // Default to 'N/A' if null
//               item['storageSize'] = item.storageSize || 'N/A'; // Default to 'N/A' if null
//             } else {
//               item['size'] = item.size || 'N/A'; // Default to 'N/A' if null
//             }

//             // Ensure the image is included
//             item['image'] = item.image || []; // Ensure image is an array

//             allOrdersItem.push(item);
//           });
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//     } catch (error) {
//       console.error("Error loading order data:", error);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       <div>
//         {orderData.map((item, index) => (
//           <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//             <div className='flex items-start gap-6 text-sm'>
//               <img className='w-16 sm:w-20' src={item.image && item.image.length > 0 ? item.image[0] : 'default_image_url'} alt={item.name} />
//               <div>
//                 <p className='sm:text-base font-medium'>{item.name}</p>
//                 <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                   <p>{currency}{item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>
//                     Size: {item.isElectronics 
//                       ? `RAM: ${item.ramSize}, Storage: ${item.storageSize}` 
//                       : item.size}
//                   </p>
//                 </div>
//                 <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
//                 <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
//               </div>
//             </div>
//             <div className='md:w-1/2 flex justify-between'>
//               <div className='flex items-center gap-2'>
//                 <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                 <p className='text-sm md:text-base'>{item.status}</p>
//               </div>
//               <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;

            if (item.isElectronics) {
              item['ramSize'] = item.ramSize || 'N/A';
              item['storageSize'] = item.storageSize || 'N/A';
            } else {
              item['size'] = item.size || 'N/A';
            }

            item['image'] = item.image || [];
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error('Error loading order data:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="orders-container">
      <div className="orders-title">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="orders-list">
        {orderData.map((item, index) => (
          <div key={index} className="order-item">
            <div className="order-details">
              <img
                className="order-image"
                src={item.image && item.image.length > 0 ? item.image[0] : 'default_image_url'}
                alt={item.name}
              />
              <div>
                <p className="order-name">{item.name}</p>
                <div className="order-info">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Size:{' '}
                    {item.isElectronics
                      ? `RAM: ${item.ramSize}, Storage: ${item.storageSize}`
                      : item.size}
                  </p>
                </div>
                <p className="order-date">
                  Date: <span>{new Date(item.date).toDateString()}</span>
                </p>
                <p className="order-payment">
                  Payment: <span>{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="order-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <p>{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="track-button">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
