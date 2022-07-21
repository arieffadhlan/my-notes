import React from 'react';
import NoteCard from './NoteCard';

function ArchiveNote({ archiveNotes, onArchive, onDelete }) {
    if (archiveNotes.length === 0) {
        return <p className="notes-list__empty">Tidak Ada Catatan</p>;
    } else {
        return (
            <div className="note-card-list__card">
                {archiveNotes.map((note) => (
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
}

export default ArchiveNote;
