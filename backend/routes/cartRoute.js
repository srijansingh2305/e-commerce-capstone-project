import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/get', authUser, getUserCart) // Route to get user cart data with authentication
cartRouter.post('/add', authUser, addToCart) // Route to add item to cart with authentication
cartRouter.post('/update', authUser, updateCart) // Route to update cart with authentication

export default cartRouter // Exporting cartRouter
