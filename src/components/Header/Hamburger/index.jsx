import React from 'react';
import './hamburger.css';

function Hamburguer({ click }) {
  return (
    <button onClick={click} className="md:hidden block cursor-pointer" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Hamburguer;
