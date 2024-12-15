import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import './CartTotal.css';

// CartTotal component displays the total cost of items in the cart
const CartTotal = () => {
    // Get the currency, delivery fee, and cart amount from the ShopContext
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        // Container for the cart total
        <div className='cart-total-container'>
            <div className='title'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className='details'>
                <div className='item'>
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='item'>
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr />
                <div className='item'>
                    <b>Total</b>
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;