import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext); // Accessing context values
  const [showFilter, setShowFilter] = useState(false); // State to control filter visibility
  const [filterProducts, setFilterProducts] = useState([]); // State to hold filtered products
  const [category, setCategory] = useState([]); // State to hold selected categories
  const [subCategory, setSubCategory] = useState([]); // State to hold selected sub-categories
  const [sortType, setSortType] = useState('relavent'); // State to hold selected sort type

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value)); // Remove category if already selected
    } else {
      setCategory(prev => [...prev, e.target.value]); // Add category if not selected
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value)); // Remove sub-category if already selected
    } else {
      setSubCategory(prev => [...prev, e.target.value]); // Add sub-category if not selected
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice(); // Create a copy of products array

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase())); // Filter by search term
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category)); // Filter by selected categories
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory)); // Filter by selected sub-categories
    }

    setFilterProducts(productsCopy); // Update filtered products
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice(); // Create a copy of filtered products array

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price))); // Sort by price low to high
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price))); // Sort by price high to low
        break;

      default:
        applyFilter(); // Apply filter without sorting
        break;
    }
  }

  useEffect(() => {
    applyFilter(); // Apply filter whenever category, sub-category, search, showSearch, or products change
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct(); // Sort products whenever sort type changes
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'TrendSetters'} text2={'by Wire Wear'} />
            {/* Product Sort */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection; // Exporting Collection component
