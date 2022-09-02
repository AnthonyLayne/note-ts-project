import { LOG_IN, LOG_OUT } from "../actions/types";

const initialState = {
  username: null,
  loggedIn: false,
};
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      //PAYLOAD === username
      //the submission should toggle loggedIn to true
      //need to put the values of the username and whether loggedIn on state
      return {
        ...state,
        user: { username: action.payload, loggedIn: true },
      };
    }
    case LOG_OUT: {
      //need to put the state back to the original state
      //so username should be empty and loggedIn should be false
      return initialState;
    }
    default: {
      return state;
    }
  }
}
