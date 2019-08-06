export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const FETCH_ALL = 'FETCH_ALL';
export const SELECT_ENTITY = 'SELECT_ENTITY';
export const FILTER_KEYWORD = 'FILTER_LIST';

// Request to API.
export const getAllMovies = () => {
  return (dispatch) => {
    fetch(`https://swapi.co/api/films/`)
    .then(response => response.json())
    .then(movies => {
      dispatch({
        type: FETCH_MOVIES,
        payload: movies,
      })
    })
    .catch(error => dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message }));
  }
}

// Request to API.
export const getAllCharacters = () => {
  return (dispatch) => {
    fetch(`https://swapi.co/api/people/`)
    .then(response => response.json())
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters,
      })
    })
    .catch(error => dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: error.message }));
  }
}

export const selectEntity = (entity, kind) => {
  return {
    type: SELECT_ENTITY,
    payload: {...entity, kind},
  };
}

export const setFilterKeyword = (keyword) => {
  return {
    type: FILTER_KEYWORD,
    payload: keyword,
  };
}
