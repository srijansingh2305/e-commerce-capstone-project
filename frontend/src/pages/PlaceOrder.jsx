import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './PlaceOrder.css'; // Import external CSS file

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products, electronics } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Order Payment',
            description: 'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } });
                    if (data.success) {
                        navigate('/orders');
                        setCartItems({});
                    }
                } catch (error) {
                    console.error(error);
                    toast.error('Payment verification failed');
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            let orderItems = [];

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items)) ||
                            structuredClone(electronics.find(electronic => electronic._id === items));
                        if (itemInfo) {
                            itemInfo.quantity = cartItems[items][item];
                            itemInfo.size = item; 
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            };

            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
                    if (response.data.success) {
                        setCartItems({});
                        navigate('/orders');
                    } else {
                        toast.error(response.data.message);
                    }
                    break;

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
                    if (responseStripe.data.success) {
                        window.location.replace(responseStripe.data.session_url);
                    } else {
                        toast.error(responseStripe.data.message);
                    }
                    break;

                case 'razorpay':
                    const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order);
                    }
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="place-order-form">
            {/* Left Side */}
            <div className="form-left">
                <div className="title-container">
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className="input-group">
                    <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className="input" type="text" placeholder="First name" />
                    <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className="input" type="text" placeholder="Last name" />
                </div>
                <input required onChange={onChangeHandler} name="email" value={formData.email} className="input" type="email" placeholder="Email address" />
                <input required onChange={onChangeHandler} name="street" value={formData.street} className="input" type="text" placeholder="Street" />
                <div className="input-group">
                    <input required onChange={onChangeHandler} name="city" value={formData.city} className="input" type="text" placeholder="City" />
                    <input onChange={onChangeHandler} name="state" value={formData.state} className="input" type="text" placeholder="State" />
                </div>
                <div className="input-group">
                    <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className="input" type="number" placeholder="Zipcode" />
                    <input required onChange={onChangeHandler} name="country" value={formData.country} className="input" type="text" placeholder="Country" />
                </div>
                <input required onChange={onChangeHandler} name="phone" value={formData.phone} className="input" type="number" placeholder="Phone" />
            </div>

            {/* Right Side */}
            <div className="form-right">
                {/* Cart Total Section */}
                <div className="cart-total-container">
                    <CartTotal />
                </div>

                {/* Payment Section */}
                <div className="payment-section">
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    <div className="payment-options">
                        <div onClick={() => setMethod('stripe')} className={`payment-option ${method === 'stripe' ? 'selected' : ''}`}>
                            <p className="circle"></p>
                            <img src={assets.stripe_logo} alt="Stripe" />
                        </div>
                        <div onClick={() => setMethod('razorpay')} className={`payment-option ${method === 'razorpay' ? 'selected' : ''}`}>
                            <p className="circle"></p>
                            <img src={assets.razorpay_logo} alt="Razorpay" />
                        </div>
                        <div onClick={() => setMethod('cod')} className={`payment-option ${method === 'cod' ? 'selected' : ''}`}>
                            <p className="circle"></p>
                            <span>Cash on Delivery</span>
                        </div>
                    </div>
                    <div className="submit-button">
                        <button type="submit">PLACE ORDER</button>
                    </div>
                </div>
            </div>

        </form>
    );
};

export default PlaceOrder;
