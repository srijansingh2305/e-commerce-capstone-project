import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addProduct); // Route to add product with admin authentication and multiple image uploads
productRouter.post('/remove', adminAuth, removeProduct); // Route to remove product with admin authentication
productRouter.post('/single', singleProduct); // Route to get single product data
productRouter.get('/list', listProducts); // Route to list all products

export default productRouter; // Exporting product router
