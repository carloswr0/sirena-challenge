import { FETCH_MOVIES } from '../actions/actionCreator';

const initialState = [];

function movies(state = initialState, action) {
  switch(action.type) {
    case FETCH_MOVIES:
      return [...state, ...action.payload.results];
       
    default:
      return state;   
  }
}

export default movies;