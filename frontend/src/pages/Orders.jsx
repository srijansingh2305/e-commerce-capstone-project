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
