import React, { useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const AddElectronics = ({ token }) => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category] = useState("Electronics"); // Fixed category
    const [subCategory, setSubCategory] = useState(""); // Subcategory state
    const [bestseller, setBestseller] = useState(false); // Initialize bestseller state
    const [ramSize, setRamSize] = useState([]);
    const [storageSize, setStorageSize] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        console.log("Submitting form with the following data:");
        console.log("Name:", name);
        console.log("Description:", description);
        console.log("Price:", price);
        console.log("Category:", category);
        console.log("SubCategory:", subCategory);
        console.log("Bestseller:", bestseller);
        console.log("RAM Size:", ramSize);
        console.log("Storage Size:", storageSize);

        try {
            const formData = new FormData();
            // Append all necessary fields
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("subCategory", subCategory);   
            formData.append("ramSize", JSON.stringify(ramSize)); // Add RAM size
            formData.append("storageSize", JSON.stringify(storageSize)); // Add Storage size 
            formData.append("bestseller", bestseller); // Include bestseller status
            image1 && formData.append("image1", image1);
            image2 && formData.append("image2", image2);
            image3 && formData.append("image3", image3);
            image4 && formData.append("image4", image4);

            const response = await axios.post(backendUrl + "/api/electronics/add", formData, {
                headers: { token }
            });
            if (response.data.success) {
                toast.success(response.data.message);
                // Reset form fields
                setName("");
                setDescription("");
                setPrice("");
                setSubCategory(""); // Reset subCategory
                setBestseller(false); // Reset bestseller
                setRamSize([]);
                setStorageSize([]);
                setImage1(null);
                setImage2(null);
                setImage3(null);
                setImage4(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("Error occurred while adding electronics:", error);
            toast.error("Error adding electronics");
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Image</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
 </label>
                    <label htmlFor="image4">
                        <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
                    </label>
                </div>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' placeholder='Write content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product Category</p>
                    <select value={category} className='w-full px-3 py-2' disabled>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Sub Category</p>
                    <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full max-w-[500px] px-3 py-2' required>
                        <option value="">Select Sub Category</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Smartphones">Smartphones</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25000' required />
                </div>
            </div>

            <div>
                <p className='mb-2'>RAM Size</p>
                <div className='flex gap-3'>
                    {["8GB", "10GB", "12GB", "16GB", "32GB"].map(size => (
                        <div key={size} onClick={() => setRamSize(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                            <p className={`${ramSize.includes(size) ? "bg-gray-400" : "bg-gray-200"} cursor-pointer p-2 rounded`}>{size}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className='mb-2'>Storage Size</p>
                <div className='flex gap-3'>
                    {["128GB", "256GB", "512GB", "1TB", "2TB"].map(size => (
                        <div key={size} onClick={() => setStorageSize(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                            <p className={`${storageSize.includes(size) ? "bg-gray-400" : "bg-gray-200"} cursor-pointer p-2 rounded`}>{size}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-2 mt-2'>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
                <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>
            </div>

            <button type="submit" className='w-28 py-3 mt-4 bg-gray-700 text-white'>ADD</button>
        </form>
    );
};

export default AddElectronics;