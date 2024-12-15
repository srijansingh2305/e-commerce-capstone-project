// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ElectronicsProductItem from '../components/ElectronicsProductItem';
// import './ElectronicsList.css';

// const ElectronicsList = () => {
//   const { electronics, search, showSearch } = useContext(ShopContext);
//   const [filterElectronics, setFilterElectronics] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relevant');

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setSubCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const applyFilter = () => {
//     let electronicsCopy = electronics.slice();

//     if (showSearch && search) {
//       electronicsCopy = electronicsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     }

//     if (category.length > 0) {
//       electronicsCopy = electronicsCopy.filter(item => category.includes(item.category));
//     }

//     if (subCategory.length > 0) {
//       electronicsCopy = electronicsCopy.filter(item => subCategory.includes(item.subCategory));
//     }

//     setFilterElectronics(electronicsCopy);
//   };

//   const sortElectronics = () => {
//     let feCopy = filterElectronics.slice();

//     switch (sortType) {
//       case 'low-high':
//         setFilterElectronics(feCopy.sort((a, b) => (a.price - b.price)));
//         break;

//       case 'high-low':
//         setFilterElectronics(feCopy.sort((a, b) => (b.price - a.price)));
//         break;

//       default:
//         applyFilter();
//         break;
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch, electronics]);

//   useEffect(() => {
//     sortElectronics();
//   }, [sortType]);

//   return (
//     <div className="electronics-container">
      
//       {/* Filter Options */}
//       <div className="electronics-filter">
//         <p className="filter-title">FILTERS</p>
        
//         {/* Category Filter */}
//         <div className="filter-category">
//           <p className="filter-title">CATEGORIES</p>
//           <div className="filter-items">
//             <label>
//               <input type="checkbox" value={'Electronics'} onChange={toggleCategory} /> Electronics
//             </label>
//           </div>
//         </div>

//         {/* SubCategory Filter */}
//         <div className="filter-subcategory">
//           <p className="filter-title">TYPE</p>
//           <div className="filter-items">
//             <label>
//               <input type="checkbox" value={'Gadgets'} onChange={toggleSubCategory} /> Gadgets
//             </label>
//             <label>
//               <input type="checkbox" value={'Accessories'} onChange={toggleSubCategory} /> Accessories
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="electronics-list">
//         <div className="electronics-header">
//           <Title text1={'ElectroTrends'} text2={' Wire Wear '} />
//           <select onChange={(e) => setSortType(e.target.value)} className="sort-select">
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Map Electronics */}
//         <div className="electronics-grid">
//           {filterElectronics.map((item, index) => (
//             <ElectronicsProductItem 
//               key={index} 
//               name={item.name} 
//               id={item._id} 
//               price={item.price} 
//               image={item.image} 
//               // ramSize={item.ramSize}
//               // storageSize={item.storageSize}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ElectronicsList;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ElectronicsProductItem from '../components/ElectronicsProductItem';
import './ElectronicsList.css';

const ElectronicsList = () => {
  const { electronics, search, showSearch } = useContext(ShopContext);
  const [filterElectronics, setFilterElectronics] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let electronicsCopy = electronics.slice();

    if (showSearch && search) {
      electronicsCopy = electronicsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      electronicsCopy = electronicsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      electronicsCopy = electronicsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterElectronics(electronicsCopy);
  };

  const sortElectronics = () => {
    let feCopy = filterElectronics.slice();

    switch (sortType) {
      case 'low-high':
        setFilterElectronics(feCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterElectronics(feCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, electronics]);

  useEffect(() => {
    sortElectronics();
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
          <Title text1={'ElectroTrends'} text2={' Wire Wear '} />
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

export default ElectronicsList;