import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatProduct.css';

const WhatProduct = () => {
  return (
    <div className='centro'>
    <div className='product__whatProduct section__padding' id='what'>
      <div className='product__whatProduct-heading'>
        <h1 className='gradient-text'>Experience <span>extreme </span>sports</h1>
        <p>Explore</p>
      </div>
      <div className='product__whatProduct-feature'>
      <Feature title="What's LIVE EXTREME" text="Join the best team made up of extreme sportsmen and sportswomen"/>
      </div>
      <div className='product__whatProduct-container'>
        <Feature title="Join in" text="Join in and live your unique life"/>
        <Feature title="Get fit" text="Get fit and be unstoppable"/>
        <Feature title="Don't stop" text="Don't stop having fun with extreme sports"/>
      </div>
    </div>
    </div>
  )
}

export default WhatProduct