import axios from 'axios';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const FETCH_ALL = 'FETCH_ALL';
export const SELECT_ENTITY = 'SELECT_ENTITY';
export const FILTER_KEYWORD = 'FILTER_LIST';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
export const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS';
export const SEARCH_CHARACTERS_FAILURE = 'SEARCH_CHARACTERS_FAILURE';

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

// Request to API.
export const getCharacterMovies = (filmsUrl, character) => {
  return async(dispatch) => {
    try {
      const promiseArray = filmsUrl.map(url =>
        axios.get(url)
      );
      const results = await Promise.all(promiseArray);
      const moviesArray = results.map(result => result.data);
      dispatch({
        type: FETCH_MOVIE,
        payload: {moviesArray, character}
      })
    } 
    catch(error) {
      dispatch({
        type: FETCH_MOVIE_FAILURE,
        payload: error.message
      })
    }
  }
}

// Request to API.
export const searchCharacters = (searchkeyword) => {
  return (dispatch) => {
    fetch(`https://swapi.co/api/people/?search=${searchkeyword}`)
    .then(response => response.json())
    .then(characters => {
      dispatch({
        type: SEARCH_CHARACTERS,
        payload: characters,
      })
    })
    .catch(error => dispatch({ type: SEARCH_CHARACTERS_FAILURE, payload: error.message }));
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
