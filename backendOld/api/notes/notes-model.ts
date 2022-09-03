export {};
const db = require("../../data/db-config");

function getAllNotes() {
  //return db("notes").leftJoin("user_id", "note_id").select("notes.*");
  return db("notes");
}

async function getAllUserNotes(user_username: string) {
  return await db("notes").where("user_username", user_username);
}

async function getNoteById(note_id: number) {
  const data = await db("notes").where("note_id", note_id);
  const firstRow = data[0];
  if (!firstRow) return null;
  const note = {
    note_id: firstRow.note_id,
    note_title: firstRow.note_title,
    note_description: firstRow.note_description,
  };
  return note;
}

// function addNote(newNote) {
//   return db("notes").insert(newNote);
// }
const addNote = async (note_description: string, note_title: string, user_username: string) => {
  const newNote = await db("notes").insert(note_description, note_title, user_username);
  return newNote;
};

const deleteById = (note_id: number) => {
  return db("notes").where("note_id", note_id).del();
};

module.exports = {
  getNoteById,
  getAllNotes,
  getAllUserNotes,
  addNote,
  deleteById,
};
