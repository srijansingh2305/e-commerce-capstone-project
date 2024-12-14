import { v2 as cloudinary } from "cloudinary"
import electronicsModel from "../models/electronicsModel.js";

// Function to add electronics
const addElectronics = async (req, res) => {
    try {
        const { name, description, price, category, ramSize, storageSize, subCategory } = req.body;
        const image = req.files.image && req.files.image[0];
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const electronicsData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            ramSize: Array.isArray(ramSize) ? ramSize : JSON.parse(ramSize), // Ensure this is a flat array
            storageSize: JSON.parse(storageSize),
            image: imagesUrl,
            date: Date.now()
        };

        const electronics = new electronicsModel(electronicsData);
        await electronics.save();

        res.json({ success: true, message: "Electronics Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function to list electronics
const listElectronics = async (req, res) => {
    try {
        const electronics = await electronicsModel.find({});
        res.json({ success: true, electronics });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const removeElectronics = async (req, res) => {
    try {
        
        await electronicsModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const singleElectronics = async (req, res) => {
    try {
        
        const { electronicsId } = req.body
        const electronics = await electronicsModel.findById(electronicsId)
        res.json({success:true,electronics})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addElectronics, listElectronics, removeElectronics, singleElectronics };