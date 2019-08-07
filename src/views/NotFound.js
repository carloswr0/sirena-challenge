import React from 'react';
import './NotFound.scss';
import yoda from '../assets/yoda.png';

function NotFound() {
  return (
    <div className="sheet__not-found">
      <img src={yoda} alt="Yoda"/>
      <h1>Seleccionar una opcion debes, joven padawan.</h1>
    </div>
  );
}

export default NotFound;
