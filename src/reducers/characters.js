import { FETCH_CHARACTERS, FETCH_MOVIE } from '../actions/actionCreator';

const initialState = [];

function characters(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return [...state, ...action.payload.results];

    case FETCH_MOVIE:
      const index = state.findIndex(e => e.name === action.payload.character);
      const stateCopy = [...state];
      stateCopy[index].movies = action.payload.moviesArray;  
      return stateCopy;

    default:
      return state;   
  }
}

export default characters;