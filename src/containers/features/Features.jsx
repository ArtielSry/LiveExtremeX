import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'BASE Jumping',
    text: 'Sport of jumping from fixed objects'
  } ,
  {
      title: 'Big-Wave Surfing',
      text: 'Navigates with risks'
  } ,
  {
      title: 'Rafting',
      text: 'Down the most difficult river'
  } ,
  {
      title: 'Wingsuit',
      text: 'Fly in the air using a special jumpsuit '
  } 
  
]

const Features = () => {
  return (
    <div className='product__features section__padding' id='features'>
      <div className='product__features-heading'>
        <h1 className='gradient-text'>Extreme sports <span>activities</span></h1>
        <p>Upcoming calls:</p>
      </div>
      <div className='product__features-container'>
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features