import {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_HIGHLIGHTED_FIRST_NAME,
  SET_HIGHLIGHTED_LAST_NAME,
} from "../types";
import { combineReducers } from "redux";

const initialState = {
  firstName: "",
  lastName: "",
  highlightedFirstName: [],
  highlightedLastName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SET_HIGHLIGHTED_FIRST_NAME:
      return { ...state, highlightedFirstName: action.payload };
    case SET_HIGHLIGHTED_LAST_NAME:
      return { ...state, highlightedLastName: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  app: rootReducer,
});
