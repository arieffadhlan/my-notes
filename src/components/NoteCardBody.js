import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteCardBody({ title, createdAt, body }) {
    return (
        <div className="note-card__body">
            <h3 className="note-card__title">{title}</h3>
            <span className="note-card__created-at">
                {showFormattedDate(createdAt)}
            </span>
            <p className="note-card__content">{body}</p>
        </div>
    );
}

export default NoteCardBody;
