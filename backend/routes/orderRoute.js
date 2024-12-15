import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders) // Route to list all orders with admin authentication
orderRouter.post('/status', adminAuth, updateStatus) // Route to update order status with admin authentication

// Payment Features
orderRouter.post('/place', authUser, placeOrder) // Route to place order with authentication
orderRouter.post('/stripe', authUser, placeOrderStripe) // Route to place order using Stripe with authentication
orderRouter.post('/razorpay', authUser, placeOrderRazorpay) // Route to place order using Razorpay with authentication

// User Feature 
orderRouter.post('/userorders', authUser, userOrders) // Route to get user orders with authentication

// Verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe) // Route to verify Stripe payment with authentication
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay) // Route to verify Razorpay payment with authentication

export default orderRouter // Exporting orderRouter
