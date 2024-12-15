import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import './SearchBar.css';
import SearchResults from './SearchResults'; // Import the new SearchResults component

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch, products, electronics } = useContext(ShopContext); // Accessing context values
    const [filteredResults, setFilteredResults] = useState([]); // State to hold filtered search results

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
        setSearch(e.target.value); // Update search state with user input
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
                    {search && <SearchResults results={filteredResults} />} {/* Display search results */}
                </div>
            ) : null}
        </div>
    );
}

export default SearchBar; // Exporting SearchBar component
