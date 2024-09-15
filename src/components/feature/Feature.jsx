import React from 'react';
import './feature.css';

const Feature = ({ title, text}) => {
  return (
    <div className='product__features-container__feature'>
      <div className='product__features-container__feature-title'>
        <div/>  
        <h1>{title}</h1>
        </div>
      <div className='product__features-container_feature-text'>
        {text}
      </div>
      </div>
  )
}

export default Feature