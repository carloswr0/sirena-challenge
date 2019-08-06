import { SELECT_ENTITY } from '../actions/actionCreator';

const initialState = {};

function selected(state = initialState, action) {
  switch(action.type) {
    case SELECT_ENTITY:
      return action.payload;
       
    default:
      return state;   
  }
}

export default selected;