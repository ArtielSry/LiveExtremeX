import React from 'react';
import './brand.css';
import { adidas, nike, puma, decat, fila } from './imports.js';

const Brand = () => {
  return (
    <div className='product__brand'>
      <div>
        <img src={adidas} alt='adidas'/>
      </div>
      <div>
        <img src={nike}  alt='nike'/>
      </div>
      <div>
        <img src={puma}  alt='puma'/>
      </div>
      <div>
        <img src={fila}  alt='fila'/>
      </div>
      <div>
        <img src={decat}  alt='decathlon'/>
      </div>
    </div>
  )
}

export default Brand