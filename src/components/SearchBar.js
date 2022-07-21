import React from 'react';

function SearchBar({ searchHandler }) {
    return (
        <form role="search" className="search-bar">
            <div className="search-bar__input-group">
                <input
                    type="search"
                    className="search-bar__input"
                    onChange={searchHandler}
                    placeholder="Cari catatan ... "
                    aria-label="Cari catatan"
                />
            </div>
        </form>
    );
}

export default SearchBar;
