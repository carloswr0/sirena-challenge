import React from 'react';
import './CharacterSheet.scss';
import { firstCharacterUppercase } from '../helpers';

function CharacterSheet(props) {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = props.selected;
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
        <li>A new hope</li>
      </ul>
    </div>
  );
}

export default CharacterSheet;
