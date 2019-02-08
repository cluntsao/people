import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className="pa2 mb5">
            <input 
                type="search" 
                placeholder="Search People" 
                className="pa3 ba b--green bg-lightest-blue" 
                onChange={searchChange}
                value={searchField}
            />
        </div>
    );
}

export default SearchBox;