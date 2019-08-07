import { SEARCH_CHARACTERS, SEARCH_CHARACTERS_FAILURE } from '../actions/actionCreator';

const initialState = {};

function search(state = initialState, action) {
  switch(action.type) {

    case SEARCH_CHARACTERS:
    return  action.payload;

    case SEARCH_CHARACTERS_FAILURE:
      return state;

    default:
      return state;   
  }
}

export default search;