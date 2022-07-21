import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(e) {
        const { value } = e.target;
        this.setState(() => {
            return {
                title: value.length > 50 ? value.slice(0, 50) : value,
            };
        });
    }

    onBodyChangeHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value,
            };
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: '',
        });
    }

    render() {
        const { title, body } = this.state;

        return (
            <form className="note-input" onSubmit={this.onSubmitHandler}>
                <h2 className="note-input__title">Buat Catatan</h2>
                <label className="note-input__label">
                    Judul
                    <span className="note-input__char-limit">
                        Sisa karakter: {50 - title.length}
                    </span>
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={this.onTitleChangeHandler}
                    placeholder="Tuliskan judul..."
                    required
                />
                <label className="note-input__label">Isi Catatan</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={this.onBodyChangeHandler}
                    placeholder="Tuliskan isi catatan..."
                    required
                />
                <button type="submit" aria-label="Menambahkan catatan">
                    Tambahkan
                </button>
            </form>
        );
    }
}

export default NoteInput;
