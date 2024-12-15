import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([]) // State for storing product list

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse()); // Update product list state with fetched data
      }
      else {
        toast.error(response.data.message) // Display error message
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message) // Display error message
    }
  }

  const removeProduct = async (id) => {
    try {

      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message) // Display success message
        await fetchList(); // Refresh product list
      } else {
        toast.error(response.data.message) // Display error message
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message) // Display error message
    }
  }

  useEffect(() => {
    fetchList() // Fetch product list on component mount
  }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/* Product List */}
        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default List // Exporting List component
