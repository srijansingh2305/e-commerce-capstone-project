import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css'; // Add styles for the search results

const SearchResults = ({ results }) => {
    return (
        <div className='search-results-container'>
            {results.length > 0 ? (
                results.map((item) => (
                    <Link key={item._id} to={`/${item.category === 'Electronics' ? 'electronicsproduct' : 'product'}/${item._id}`}>
                        <div className='search-result-item'>
                            <img src={item.image[0]} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default SearchResults;