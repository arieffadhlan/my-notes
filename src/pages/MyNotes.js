import React from 'react';
import Navbar from '../components/Navbar';
import NoteCardList from '../components/NoteCardList';
import { getInitialData } from '../utils/index';
import '../styles/style.css';

class MyNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };

        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <>
                <Navbar />
                <NoteCardList
                    notes={this.state.notes}
                    onArchive={this.onArchiveHandler}
                    onDelete={this.onDeleteHandler}
                />
            </>
        );
    }
}

export default MyNotes;
