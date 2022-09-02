import { Link } from "react-router-dom";

import "./index.css";

export default function Header() {
  return (
    <div className="headerWrapper">
      <h1 className="noteHeader">Notes</h1>

      <Link to="/notes" className="primary-button">
        View Your Notes
      </Link>

      <Link to="/edit" className="primary-button">
        + Create A New Note
      </Link>
    </div>
  );
}
