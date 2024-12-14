
import express from 'express';
import { addElectronics, listElectronics, removeElectronics, singleElectronics } from '../controllers/electronicsController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const electronicsRouter = express.Router();

electronicsRouter.post('/add', adminAuth, upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addElectronics);
electronicsRouter.get('/list', listElectronics);
electronicsRouter.post('/remove',adminAuth, removeElectronics);
electronicsRouter.post('/single',singleElectronics);

export default electronicsRouter;