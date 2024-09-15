import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import PopUp from '../register/Register';

const Menu= () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#what'>About</a></p>
    <p><a href='#more'>More</a></p>
    <p><a href='#blog'>Blog</a></p>
  </>
)

const Navbar = () => {
  const  [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='product__navbar'>
      <div className='product__navbar-links'>
        <div className='product__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='product__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='product__navbar-sign'>
        <PopUp/>
      </div>
      <div className='product__navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='product__navbar-menu_container scale-up-center'>
            <div className='product__navbar-menu_container-links'>
            <Menu />
            </div>
            <div className="product__navbar-menu_container-links-sign">
            <PopUp/>
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar