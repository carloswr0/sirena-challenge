import { combineReducers } from 'redux';

// Reducers are below.
import characters from './characters';
import movies from './movies';
import selected from './selectedEntity';
import filter from './filter';
import search from './search';

const rootReducer = combineReducers({characters, movies, selected, filter, search});

export default rootReducer;
