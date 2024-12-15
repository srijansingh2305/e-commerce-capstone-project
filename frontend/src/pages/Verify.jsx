import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext) // Accessing context values
    const [searchParams, setSearchParams] = useSearchParams() // Accessing search parameters from URL
    
    const success = searchParams.get('success') // Getting 'success' parameter
    const orderId = searchParams.get('orderId') // Getting 'orderId' parameter

    const verifyPayment = async () => {
        try {

            if (!token) {
                return null
            }

            const response = await axios.post(backendUrl + '/api/order/verifyStripe', { success, orderId }, { headers: { token } })

            if (response.data.success) {
                setCartItems({}) // Clearing cart items on successful verification
                navigate('/orders') // Navigate to orders page on success
            } else {
                navigate('/cart') // Navigate to cart page on failure
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment() // Verify payment on component mount or when token changes
    }, [token])

    return (
        <div>

        </div>
    )
}

export default Verify // Exporting Verify component
