import React from 'react';
import NoteCard from './NoteCard';

function NoteCardList({ notes, onArchive, onDelete }) {
    return (
        <div className="note-card-list">
            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    id={note.id}
                    onArchive={onArchive}
                    onDelete={onDelete}
                    {...note}
                />
            ))}
        </div>
    );
}

export default NoteCardList;
