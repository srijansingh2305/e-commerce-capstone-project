// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import { useLocation } from 'react-router-dom';

// const SearchBar = () => {

//     const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
//     const [visible,setVisible] = useState(false)
//     const location = useLocation();

//     useEffect(()=>{
//         if (location.pathname.includes('collection')) {
//             setVisible(true);
//         }
//         else {
//             setVisible(false)
//         }
//     },[location])
    
//   return showSearch && visible ? (
//     <div className='border-t border-b bg-gray-50 text-center'>
//       <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//         <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
//         <img className='w-4' src={assets.search_icon} alt="" />
//       </div>
//       <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
//     </div>
//   ) : null
// }

// export default SearchBar

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { useLocation } from 'react-router-dom';
// import './SearchBar.css';

// const SearchBar = () => {
//     const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
//     const [visible, setVisible] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         if (location.pathname.includes('collection')) {
//             setVisible(true);
//         } else {
//             setVisible(false);
//         }
//     }, [location]);

//     return showSearch && visible ? (
//         <div className='search-bar-container'>
//             <div className='search-bar'>
//                 <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className='search-input'
//                     type="text"
//                     placeholder='Search'
//                 />
//                 <img className='search-icon' src={assets.search_icon} alt="" />
//             </div>
//             <img
//                 onClick={() => setShowSearch(false)}
//                 className='close-icon'
//                 src={assets.cross_icon}
//                 alt=""
//             />
//         </div>
//     ) : null;
// }

// export default SearchBar;


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { useLocation } from 'react-router-dom';
// import './SearchBar.css';
// import SearchResults from './SearchResults'; // Import the new SearchResults component

// const SearchBar = () => {
//     const { search, setSearch, showSearch, setShowSearch, products, electronics } = useContext(ShopContext);
//     const [visible, setVisible] = useState(false);
//     const location = useLocation();
//     const [filteredResults, setFilteredResults] = useState([]);

//     useEffect(() => {
//         if (location.pathname.includes('collection')) {
//             setVisible(true);
//         } else {
//             setVisible(false);
//         }
//     }, [location]);

//     const handleSearch = (e) => {
//         const query = e.target.value;
//         setSearch(query);

//         // Filter products and electronics based on the search input
//         const filteredProducts = products.filter(product => 
//             product.name.toLowerCase().includes(query.toLowerCase())
//         );
//         const filteredElectronics = electronics.filter(electronic => 
//             electronic.name.toLowerCase().includes(query.toLowerCase())
//         );

//         // Combine the results
//         setFilteredResults([...filteredProducts, ...filteredElectronics]);
//     };

//     return (
//         <div>
//             {showSearch && visible ? (
//                 <div className='search-bar-container'>
//                     <div className='search-bar'>
//                         <input
//                             value={search}
//                             onChange={handleSearch}
//                             className='search-input'
//                             type="text"
//                             placeholder='Search'
//                         />
//                         <img className='search-icon' src={assets.search_icon} alt="" />
//                     </div>
//                     <img
//                         onClick={() => setShowSearch(false)}
//                         className='close-icon'
//                         src={assets.cross_icon}
//                         alt=""
//                     />
//                     {/* Display search results */}
//                     {search && <SearchResults results={filteredResults} />}
//                 </div>
//             ) : null}
//         </div>
//     );
// }

// export default SearchBar;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import './SearchBar.css';
import SearchResults from './SearchResults'; // Import the new SearchResults component

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch, products, electronics } = useContext(ShopContext);
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        // Filter products and electronics based on the search input
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        const filteredElectronics = electronics.filter(electronic => 
            electronic.name.toLowerCase().includes(search.toLowerCase())
        );

        // Combine the results
        setFilteredResults([...filteredProducts, ...filteredElectronics]);
    }, [search, products, electronics]); // Update results whenever search or products change

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCloseSearch = () => {
        setShowSearch(false); // Hide the search bar
        setSearch(''); // Clear the search input
        setFilteredResults([]); // Clear the search results
    };

    return (
        <div>
            {showSearch ? (
                <div className='search-bar-container'>
                    <div className='search-bar'>
                        <input
                            value={search}
                            onChange={handleSearchChange}
                            className='search-input'
                            type="text"
                            placeholder='Search'
                        />
                        <img className='search-icon' src={assets.search_icon} alt="" />
                    </div>
                    <img
                        onClick={handleCloseSearch} // Use the new close handler
                        className='close-icon'
                        src={assets.cross_icon}
                        alt=""
                    />
                    {/* Display search results */}
                    {search && <SearchResults results={filteredResults} />}
                </div>
            ) : null}
        </div>
    );
}

export default SearchBar;