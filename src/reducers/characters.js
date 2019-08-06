import { FETCH_CHARACTERS } from '../actions/actionCreator';

const initialState = [];

function characters(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return [...state, ...action.payload.results];
       
    default:
      return state;   
  }
}

export default characters;