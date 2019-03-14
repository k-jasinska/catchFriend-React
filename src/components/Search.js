import React from 'react';
import './Search.css';

const Search = () => {
    return (<div className="search-box">
        <input className="search-txt" placeholder="Szukaj osoby..." />
        <i className="fas fa-search search-btn"></i>
    </div>);
}

export default Search;