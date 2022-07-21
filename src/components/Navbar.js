import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <h1 className="navbar-content__title">My Notes</h1>
                <button
                    type="button"
                    className="navbar-content__add-button"
                    aria-label="Menambahkan catatan"
                >
                    Buat Catatan
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
