import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./index.css";

function NotesList({ notes }) {
  return (
    <div className="notesListWrapper">
      <h2 className="header">Your Notes:</h2>

      {Object.entries(notes).map(([id, note]) => (
        <Link key={id} to={`/edit/${id}`} className="note">
          {note.title}
        </Link>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(NotesList);
