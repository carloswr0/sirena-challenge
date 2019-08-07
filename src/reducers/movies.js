import { FETCH_MOVIES } from '../actions/actionCreator';

const initialState = { 
  count: 0,
  next: "",
  previous: null,
  results: []
};

function movies(state = initialState, action) {
  switch(action.type) {
    case FETCH_MOVIES:
      return action.payload;
       
    default:
      return state;   
  }
}

export default movies;


