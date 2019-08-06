import { FILTER_KEYWORD } from '../actions/actionCreator';

const initialState = '';

function filter(state = initialState, action) {
  switch(action.type) {
    case FILTER_KEYWORD:
      return action.payload;
       
    default:
      return state;   
  }
}

export default filter;