
import electronicsModel from "../models/electronicsModel.js";

// Function to add electronics
const addElectronics = async (req, res) => {
    try {
        const { name, description, price, category, subCategory } = req.body;
        const image = req.files.image && req.files.image[0];

        const electronicsData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            image: image ? [image.path] : [],
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

export { addElectronics, listElectronics };