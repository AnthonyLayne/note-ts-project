import { v4 as uuidv4 } from "uuid";

import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE } from "../actions/types";

/** Example state:
 * ```
 * {
 *   "fsdafsa1": { id: "fsdafsa1", title: "", description: "", createdAt: 1649466420222 },
 *   "3892472q": { id: "3892472q", title: "", description: "", createdAt: 1649466420223 },
 * }
 * ```
 */
export function notesReducer(state = {}, action: object) {
  switch (action.type) {
    case CREATE_NOTE: {
      // PAYLOAD === { title, description }
      const id = uuidv4(); //gives random id

      return {
        //making a copy of state
        //then giving it the new state object
        //...action.payload is putting in the new values
        //of title or description
        ...state,
        [id]: { id, ...action.payload, createdAt: Date.now() },
      };
    }
    case DELETE_NOTE: {
      // PAYLOAD === id
      //defining what id is
      //making a copy of state
      //deleting the id
      //then returning state copy that was modified
      const id = action.payload;
      const stateCopy = { ...state };
      delete stateCopy[id];
      return stateCopy;
    }
    case EDIT_NOTE: {
      // PAYLOAD === { id, title?, description? }
      const id = action.payload.id;

      return {
        ...state,
        [id]: { ...state[id], ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
}
