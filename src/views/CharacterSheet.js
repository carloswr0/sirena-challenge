import React, { useEffect } from 'react';
import './CharacterSheet.scss';
import { firstCharacterUppercase } from '../helpers';
import Loader from '../assets/loader';

function CharacterSheet(props) {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films } = props.selected;
  const character = props.characters.find(e => e.name === name);

  useEffect(() => {
    if(!character.movies) {
      props.getCharacterMovies(films, name);
    }
  });

  function moveToMovie(movie) {
    props.history.push('/movies');
    props.selectEntity(movie, "movies");
  }

  return (
    <div className="sheet__character">
      <h1>{name}</h1>
      <span>Altura: {height}</span>
      <span>Peso: {mass}</span>
      <span>Color de cabello: {firstCharacterUppercase(hair_color)}</span>
      <span>Color de piel: {firstCharacterUppercase(skin_color)}</span>
      <span>Color de ojos: {firstCharacterUppercase(eye_color)}</span>
      <span>Nacimiento: {birth_year}</span>
      <span>Genero: {firstCharacterUppercase(gender)}</span>
      <span>Peliculas en las que ha aparecido:</span>
      <ul>
        {
          character.movies && character.movies.length > 0 ? character.movies.map((e, key) => {
            return <li key={key} onClick={() => moveToMovie(e)}><a>{e.title}</a></li> 
          }) : <Loader />
        }
      </ul>
    </div>
  );
}

export default CharacterSheet;
