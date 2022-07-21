import React from 'react';
import Navbar from '../components/Navbar';
import NoteCardList from '../components/NoteCardList';
import NoteInput from '../components/NoteInput';
import SearchBar from '../components/SearchBar';
import { getInitialData } from '../utils/index';
import '../styles/style.css';

class MyNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            query: '',
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onSearchHandler(e) {
        this.setState((prevState) => {
            return {
                ...prevState,
                query: e.target.value,
            };
        });
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
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: prevState.notes.filter((note) => note.id !== id),
            };
        });
    }

    noteList() {
        const { notes, query } = this.state;
        const list =
            query.trim().length !== 0
                ? notes.filter((note) =>
                      note.title.toLowerCase().includes(query.toLowerCase()),
                  )
                : notes;
        return list;
    }

    render() {
        return (
            <>
                <Navbar />
                <NoteInput addNote={this.onAddHandler} />
                <SearchBar searchHandler={this.onSearchHandler} />
                <NoteCardList
                    activeNotes={this.noteList().filter(
                        (note) => note.archived === false,
                    )}
                    archiveNotes={this.noteList().filter(
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
