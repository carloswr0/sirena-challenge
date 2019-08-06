import { combineReducers } from 'redux';

// Reducers are below.
import characters from './characters';
import movies from './movies';
import selected from './selectedEntity';
import filter from './filter';

const rootReducer = combineReducers({characters, movies, selected, filter});

export default rootReducer;
