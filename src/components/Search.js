import React from 'react';
import './Search.css';

const Search = (props) => {
    return (<div className="search-box">
        <input value={props.value} onChange={props.search} className="search-txt" placeholder="Szukaj osoby..." />
        <i className="fas fa-search search-btn"></i>
    </div>);
}

export default Search;