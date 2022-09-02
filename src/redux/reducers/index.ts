import { combineReducers } from "redux";

import { notesReducer } from "./notes";
import { userReducer } from "./user";

/**
 * Example state:
 * ```
 * {
 *   notes: {
 *    "fsdafsa1": { id: "fsdafsa1", title: "", description: "", createdAt: 1649466420222 },
 *    "3892472q": { id: "3892472q", title: "", description: "", createdAt: 1649466420223 },
 *   },
 *   user: {
 *    username: "asdf",
 *    loggedIn: true,
 *   },
 * }
 * ```
 */
export default combineReducers({ notes: notesReducer, user: userReducer });
