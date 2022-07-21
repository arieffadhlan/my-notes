import React from 'react';
import ActiveNote from './ActiveNote';
import ArchiveNote from './ArchiveNote';

function NoteCardList({ activeNotes, archiveNotes, onArchive, onDelete }) {
    return (
        <div className="note-card-list">
            <div className="noted-card-list__active-note">
                <h2 className="note-card-list__title">Catatan Aktif</h2>
                <ActiveNote
                    activeNotes={activeNotes}
                    onArchive={onArchive}
                    onDelete={onDelete}
                />
            </div>
            <div className="noted-card-list__archive-note">
                <h2 className="note-card-list__title">Arsip</h2>
                <ArchiveNote
                    archiveNotes={archiveNotes}
                    onArchive={onArchive}
                    onDelete={onDelete}
                />
            </div>
        </div>
    );
}

export default NoteCardList;
