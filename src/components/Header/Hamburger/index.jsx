import React from 'react';
import './hamburger.css';

function Hamburguer({ click }) {
  return (
    <button onClick={click} className="md:hidden block cursor-pointer">
      <div id="hamburger"></div>
    </button>
  );
}

export default Hamburguer;
