import React from 'react';
import './hamburger.css';

function Hamburguer({ click }) {
  return (
    <button onClick={click} className="md:hidden block cursor-pointer">
      <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}

export default Hamburguer;
