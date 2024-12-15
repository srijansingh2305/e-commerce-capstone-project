import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rs '; // Currency symbol
    const delivery_fee = 250; // Delivery fee
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Backend URL
    const [search, setSearch] = useState(''); // Search state
    const [showSearch, setShowSearch] = useState(false); // State to control search bar visibility
    const [cartItems, setCartItems] = useState({}); // Cart items state
    const [products, setProducts] = useState([]); // Products state
    const [electronics, setElectronics] = useState([]); // Electronics state
    const [token, setToken] = useState(''); // Token state for user authentication
    const navigate = useNavigate(); // Hook for navigation

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
    
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    
        // Update the database
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
            } catch (error) {
                console.error("Error adding to cart:", error);
                toast.error(error.message);
            }
        }
    };

    const addElectronicsToCart = async (itemId, ramSize, storageSize) => {
        if (!ramSize || !storageSize) {
            toast.error('Select RAM and Storage Size');
            return;
        }
    
        let cartData = structuredClone(cartItems);
    
        if (cartData[itemId]) {
            if (cartData[itemId][`${ramSize}-${storageSize}`]) {
                cartData[itemId][`${ramSize}-${storageSize}`] += 1;
            } else {
                cartData[itemId][`${ramSize}-${storageSize}`] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][`${ramSize}-${storageSize}`] = 1;
        }
        setCartItems(cartData);
    
        // Update the database
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, ramSize, storageSize }, { headers: { token } });
            } catch (error) {
                console.error("Error adding electronics to cart:", error);
                toast.error(error.message);
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                console.log(`Item ID: ${itemId}, Size: ${size}, Quantity: ${cartItems[itemId][size]}`);
                totalCount += cartItems[itemId][size];
            }
        }
        
        return totalCount;
    };
    
    const updateQuantity = async (itemId, size, quantity) => {
        if (quantity < 0) {
            toast.error('Quantity cannot be negative');
            return;
        }

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId][size] = quantity;
            setCartItems(cartData);
            
            // Update the database
            if (token) {
                try {
                    const response = await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
                    console.log("Response from update quantity API:", response.data);
                } catch (error) {
                    console.error("Error updating quantity:", error);
                    toast.error(error.message);
                }
            }
        } else {
            console.warn(`Item ID ${itemId} not found in cart for update.`);
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items) || electronics.find((electronic) => electronic._id === items);
            
            if (!itemInfo) {
                console.warn(`Item with ID ${items} not found in products or electronics.`);
                continue;
            }

            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            }
        }
        
        return totalAmount;
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products.reverse());
                console.log("Products fetched successfully:", response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error(error.message);
        }
    };

    const getElectronicsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/electronics/list`);
            if (response.data.success) {
                setElectronics(response.data.electronics.reverse());
                console.log("Electronics fetched successfully:", response.data.electronics);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching electronics:", error);
            toast.error(error.message);
        }
    };

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData); // Update state with fetched cart data
            } else {
                setCartItems({}); // If fetching fails, reset cart
            }
        } catch (error) {
            console.error("Error fetching user cart:", error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getProductsData();
        getElectronicsData();
    }, []); // Fetch products and electronics data on component mount

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
        if (token) {
            getUserCart(token);
        }
    }, [token]); // Fetch user cart whenever token changes

    const value = {
        products,
        electronics,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        addElectronicsToCart,
        setCartItems,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider; // Exporting ShopContextProvider component
