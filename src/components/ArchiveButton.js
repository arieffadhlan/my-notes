import React from 'react';

function ArchiveButton({ id, onArchive }) {
    return (
        <button className="note-card__archive" onClick={() => onArchive(id)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="note-card__btn-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
            </svg>
            Arsip
        </button>
    );
}

export default ArchiveButton;
