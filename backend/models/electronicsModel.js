// backend/models/electronicsModel.js
import mongoose from "mongoose";

const electronicsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    ramSize: { type: Array, required: true },
    storageSize: { type: Array, required: true },
    subCategory: { type: String, required: true },
    date: { type: Number, required: true },
    bestseller: { type: Boolean, default: false },
});

const electronicsModel = mongoose.models.electronics || mongoose.model("electronics", electronicsSchema);

export default electronicsModel;