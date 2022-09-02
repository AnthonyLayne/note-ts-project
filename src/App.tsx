import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteEditor from "./components/NoteEditor";

import "./App.css";
import { useState } from "react";

// www.notes.com/
// www.notes.com/edit
// www.notes.com/edit/asdlfkjadsasdfasf

// will have to render login page or notes list based on if user is logged in or not
// example: if !loggedIn ? Login : NotesList

function App() {
  const [loggedIn, setIsLoggedIn] = useState(true);

  return loggedIn ? (
    <Router>
      <div className="appWrapper">
        <div className="app">
          <Header />

          <Routes>
            <Route exact path="/notes" element={<NotesList />} />
            <Route exact path="edit/" element={<NoteEditor />} />
            <Route exact path="edit/:noteId" element={<NoteEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  ) : (
    <Router>
      {" "}
      <div className="appWrapper">
        <div className="app">
          <Header />

          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
