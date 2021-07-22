import React from 'react';


const SearchBar = () => {
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"> Search Blog Posts</span>
        </label>
        <input 
            type="text"
            id="header-search"
            placeholder="Search Blog Posts"
            name="s"
        />
    </form>
}

export default SearchBar;