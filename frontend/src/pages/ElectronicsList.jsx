import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ElectronicsProductItem from '../components/ElectronicsProductItem';
import './ElectronicsList.css';

const ElectronicsList = () => {
  const { electronics, search, showSearch } = useContext(ShopContext); // Accessing context values
  const [filterElectronics, setFilterElectronics] = useState([]); // State to hold filtered electronics
  const [category, setCategory] = useState([]); // State to hold selected categories
  const [subCategory, setSubCategory] = useState([]); // State to hold selected sub-categories
  const [sortType, setSortType] = useState('relevant'); // State to hold selected sort type

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value)); // Remove category if already selected
    } else {
      setCategory(prev => [...prev, e.target.value]); // Add category if not selected
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value)); // Remove sub-category if already selected
    } else {
      setSubCategory(prev => [...prev, e.target.value]); // Add sub-category if not selected
    }
  };

  const applyFilter = () => {
    let electronicsCopy = electronics.slice(); // Create a copy of electronics array

    if (showSearch && search) {
      electronicsCopy = electronicsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase())); // Filter by search term
    }

    if (category.length > 0) {
      electronicsCopy = electronicsCopy.filter(item => category.includes(item.category)); // Filter by selected categories
    }

    if (subCategory.length > 0) {
      electronicsCopy = electronicsCopy.filter(item => subCategory.includes(item.subCategory)); // Filter by selected sub-categories
    }

    setFilterElectronics(electronicsCopy); // Update filtered electronics
  };

  const sortElectronics = () => {
    let feCopy = filterElectronics.slice(); // Create a copy of filtered electronics array

    switch (sortType) {
      case 'low-high':
        setFilterElectronics(feCopy.sort((a, b) => (a.price - b.price))); // Sort by price low to high
        break;

      case 'high-low':
        setFilterElectronics(feCopy.sort((a, b) => (b.price - a.price))); // Sort by price high to low
        break;

      default:
        applyFilter(); // Apply filter without sorting
        break;
    }
  };

  useEffect(() => {
    applyFilter(); // Apply filter whenever category, sub-category, search, showSearch, or electronics change
  }, [category, subCategory, search, showSearch, electronics]);

  useEffect(() => {
    sortElectronics(); // Sort electronics whenever sort type changes
  }, [sortType]);

  return (
    <div className="electronics-container">
      {/* Filter Options */}
      <div className="electronics-filter">
        <p className="filter-title">FILTERS</p>
        
        {/* Category Filter */}
        <div className="filter-category">
          <p className="filter-title">CATEGORIES</p>
          <div className="filter-items">
            <label>
              <input type="checkbox" value={'Electronics'} onChange={toggleCategory} /> Electronics
            </label>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className="filter-subcategory">
          <p className="filter-title">TYPE</p>
          <div className="filter-items">
            <label>
              <input type="checkbox" value={'Smartphones'} onChange={toggleSubCategory} /> Smartphones
            </label>
            <label>
              <input type="checkbox" value={'Laptops'} onChange={toggleSubCategory} /> Laptops
            </label>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="electronics-list">
        <div className="electronics-header">
          <Title text1={'ElectroTrends'} text2={'by Wire Wear '} />
          <select onChange={(e) => setSortType(e.target.value)} className="sort-select">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Electronics */}
        <div className="electronics-grid">
          {filterElectronics.map((item, index) => (
            <ElectronicsProductItem 
              key={index} 
              name={item.name} 
              id={item._id} 
              price={item.price} 
              image={ item.image} 
              // ramSize={item.ramSize}
              // storageSize={item.storageSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsList; // Exporting ElectronicsList component
