import React from 'react';
import './Details.scss';
import CharacterSheet from '../views/CharacterSheet';
import MovieSheet from '../views/MovieSheet';
import NotFound from '../views/NotFound';

function Details(props) {
  
  function sheetToRender() {
    switch(props.selected.kind) {
      case 'movies':
        return <MovieSheet {...props} />;
      case 'characters':
        return <CharacterSheet {...props} />;
      default:
        return <NotFound />;
    }
  }

  return (
    <div className="details">
      {
        sheetToRender()
      }
    </div>
  );
}

export default Details;
