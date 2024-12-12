import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const ElectronicsList = ({ token }) => {
    const [electronics, setElectronics] = useState([]);

    const fetchElectronics = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/electronics/list');
            if (response.data.success) {
                setElectronics(response.data.electronics.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching electronics", error);
            toast.error(error.message);
        }
    };

    const removeElectronics = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/electronics/remove', { id }, { headers: { token } });
            if (response.data.success) {
                toast.success(response.data.message);
                await fetchElectronics();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchElectronics();
    }, []);

    return (
        <>
            <p className='mb-2'>All Electronics List</p>
            <div className='flex flex-col gap-2'>

                {/* ------- List Table Title ---------- */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b className='text-center'>Action</b>
                </div>

                {/* ------ Electronics List ------ */}
                {
                    electronics.map((item, index) => (
                        <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                            <img className='w-12' src={item.image[0]} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{currency}{item.price}</p>
                            <p onClick={() => removeElectronics(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default ElectronicsList;