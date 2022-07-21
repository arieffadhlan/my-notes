import React from 'react';
import NoteCardBody from './NoteCardBody';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function NoteCard({
    title,
    createdAt,
    body,
    id,
    archived,
    onArchive,
    onDelete,
}) {
    return (
        <article className="note-card">
            <NoteCardBody title={title} createdAt={createdAt} body={body} />
            <hr className="note-card__separator" />
            <div className="note-card__action">
                <ArchiveButton
                    id={id}
                    archived={archived}
                    onArchive={onArchive}
                />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </article>
    );
}

export default NoteCard;
