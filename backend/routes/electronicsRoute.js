import express from 'express';
import { addElectronics, listElectronics, removeElectronics, singleElectronics } from '../controllers/electronicsController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const electronicsRouter = express.Router();

electronicsRouter.post('/add', adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addElectronics); // Route to add electronics with admin authentication and multiple image uploads
electronicsRouter.get('/list', listElectronics); // Route to list all electronics
electronicsRouter.post('/remove', adminAuth, removeElectronics); // Route to remove electronics with admin authentication
electronicsRouter.post('/single', singleElectronics); // Route to get single electronics data

export default electronicsRouter; // Exporting electronics router
