import React from 'react';
import './MovieSheet.scss';

function MovieSheet(props) {
  const { episode_id, title, opening_crawl, director, producer, release_date } = props.selected;
  return (
    <div className="sheet__movie">
      <h1>{episode_id + '. ' + title}</h1>
      <span className="crawl">{opening_crawl}</span>
      <span>Director: {director}</span>
      <span>Productor: {producer}</span>
      <span>Fecha de estreno: {release_date}</span>
    </div>
  );
}

export default MovieSheet;
