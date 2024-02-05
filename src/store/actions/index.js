import {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_HIGHLIGHTED_FIRST_NAME,
  SET_HIGHLIGHTED_LAST_NAME,
} from "../types";

export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName,
});

export const setHighlightedFirstName = (highlightedFirstName) => ({
  type: SET_HIGHLIGHTED_FIRST_NAME,
  payload: highlightedFirstName,
});

export const setHighlightedLastName = (highlightedLastName) => ({
  type: SET_HIGHLIGHTED_LAST_NAME,
  payload: highlightedLastName,
});
