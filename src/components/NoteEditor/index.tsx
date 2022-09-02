import { useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { createNote, deleteNote, editNote } from "../../redux/actions";

import "./index.css";

const EMPTY_NOTE = { title: "", description: "" };

const NoteEditor = ({ notes, createNote, editNote }) => {
  const navigate = useNavigate();

  let { noteId } = useParams();
  const note = notes[noteId];

  const [noteState, setNoteState] = useState(note ? { ...note } : EMPTY_NOTE);

  const handleChange = (e) =>
    setNoteState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (note) editNote({ id: noteId, title: noteState.title, description: noteState.description });
    else createNote({ title: noteState.title, description: noteState.description });

    navigate("/notes");
  };

  return (
    <div className="noteEditorWrapper">
      <form onSubmit={handleSubmit}>
        <h3>{note ? "Edit" : "Create"} Note:</h3>
        <input
          name="title"
          value={noteState.title}
          placeholder="New Note"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={noteState.description}
          placeholder="Note Content"
          rows={12}
          onChange={handleChange}
        />
        <button type="submit" className="primary-button">
          Save
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  notes: reduxState.notes,
});

export default connect(mapStateToProps, { createNote, deleteNote, editNote })(NoteEditor);
