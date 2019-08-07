import { 
  FETCH_CHARACTERS, 
  FETCH_CHARACTERS_FAILURE, 
  FETCH_MOVIE, 
  FETCH_MORE_CHARACTERS, 
  FETCH_MORE_CHARACTERS_FAILURE } from '../actions/actionCreator';

//const initialState = [];
const initialState = { 
  count: 0,
  next: "",
  previous: null,
  results: []
};

function characters(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return action.payload;

    case FETCH_CHARACTERS_FAILURE:
      return state;

    case FETCH_MOVIE:
      const index = state.results.findIndex(e => e.name === action.payload.character);
      const stateCopy = {...state};
      stateCopy.results[index].movies = action.payload.moviesArray;  
      return stateCopy;
    
    case FETCH_MORE_CHARACTERS:
      const stateCopy2 = {...state};
      stateCopy2.next = action.payload.next;
      const newResults = stateCopy2.results.concat(action.payload.results);
      stateCopy2.results = newResults;
      return stateCopy2;

    case FETCH_MORE_CHARACTERS_FAILURE:
      return state;
    
    default:
      return state;   
  }
}

export default characters;


 
