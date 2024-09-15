import React from 'react';
import './header.css';
import ai from '../../assets/reducidas/ai.png';

const Header = () => {
  return (
    <div className='product__header section__padding' id="home">
      <div className='product__header-content'>
        <h1 className='gradient__text'>LIVE <span>EXTREME</span></h1>
        <p>explore possibilities.</p>
        <div className='product__header-content__input'>
          <input type='email' placeholder="Your email address"></input>
          <button type="button">Get started</button>
        </div>
      </div>
      <div className='product__header-image'>
        <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
