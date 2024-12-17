// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'
// import electronicsRouter from './routes/electronicsRoute.js';

// // App Config
// const app = express()
// const port = process.env.PORT || 4000
// connectDB()
// connectCloudinary()

// // middlewares
// app.use(express.json())
// app.use(cors())

// // api endpoints
// app.use('/api/user',userRouter)
// app.use('/api/product',productRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)
// app.use('/api/electronics', electronicsRouter);

// app.get('/',(req,res)=>{
//     res.send("API Working")
// })

// app.listen(port, ()=> console.log('Server started on PORT : '+ port))





import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import electronicsRouter from './routes/electronicsRoute.js';
import path from 'path'; // Import path module
import { fileURLToPath } from 'url'; // Import for getting __dirname
import { dirname } from 'path'; // Import for getting __dirname

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/electronics', electronicsRouter);

// Serve static files from the React app's dist directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist'))); // For frontend

// Serve static files from the admin panel's dist directory
app.use('/admin', express.static(path.join(__dirname, '..', 'admin', 'dist'))); // For admin panel

// The "catchall" handler for frontend: for any request that doesn't match one above, send back index.html.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html')); // Adjusted to point to frontend dist
});

// The "catchall" handler for admin panel: for any request that doesn't match one above, send back index.html.
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'dist', 'index.html')); // Adjusted to point to admin dist
});

// Test Route
app.get('/', (req, res) => {
    res.send("API Working");
});

// Start the server
app.listen(port, () => console.log('Server started on PORT : ' + port));