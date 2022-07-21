import React from 'react';
import Navbar from '../components/Navbar';
import NoteCardList from '../components/NoteCardList';
import NoteInput from '../components/NoteInput';
import { getInitialData } from '../utils/index';
import '../styles/style.css';

class MyNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };

        this.onAddHandler = this.onAddHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onAddHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    },
                ],
            };
        });
    }

    onArchiveHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) =>
                    note.id === id
                        ? { ...note, archived: !note.archived }
                        : note,
                ),
            };
        });
    }

    onDeleteHandler(id) {
        const { notes } = this.state;
        notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    render() {
        const { notes } = this.state;

        return (
            <>
                <Navbar />
                <NoteInput addNote={this.onAddHandler} />
                <NoteCardList
                    activeNotes={notes.filter(
                        (note) => note.archived === false,
                    )}
                    archiveNotes={notes.filter(
                        (note) => note.archived !== false,
                    )}
                    onArchive={this.onArchiveHandler}
                    onDelete={this.onDeleteHandler}
                />
            </>
        );
    }
}

export default MyNotes;
