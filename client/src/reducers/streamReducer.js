import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

import _ from "lodash";

// Return object is makes things much easier than return an array
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      //key interpolation syntax
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      // b/c in action creator, we decide to dispatch the delete action and change the payload to id
      // omit function itself already creates a new obj
      return _.omit(state, action.payload);

    case FETCH_STREAMS:
      //take an arry, return an object with key id;
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
