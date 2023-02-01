import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='product__footer section__padding'>
      <div className='product__footer-heading'>
        <h1>don't waste another second and <span>start living on the edge!</span></h1>
      </div>
      <div className='product__footer-links'>
         <div className='product__footer-links-logo'>
           <img src={logo} alt='extreme live'/>
         </div>
         <div className="product__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
         </div>
          <div className="product__footer-links_div">
            <h4>Company</h4>
            <p>Terms and Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
       </div> 
      <div className="product__footer-copyright">
          <p>@2022 ExtremeLive. Development by ArtielS</p>
       </div>
    </div>
  )
}

export default Footer