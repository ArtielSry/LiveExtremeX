import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/reducidas/imgPos.png'

const Possibility = () => {
  return (
    <div className='product__possibility section__padding'>
      <div className='product__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='product__possibility-content'>
        <h4>sign me up for the physical tests</h4>
        <h1>show your <span>strength</span></h1>
        <p>Pass the physical tests and join </p>
        <h4>see test</h4>
      </div>
    </div>
  )
}

export default Possibility
