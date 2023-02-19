import React from 'react';
import Slider from 'react-slick';
import './workers.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import start from '../../assets/start.png'

const Workers = ({ title, img, price}) => {
  const dataWorkers = [{
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    person: 'Taylor Mckenzy',
    title: 'Amazing experience!!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },{
  img: 'https://randomuser.me/api/portraits/women/48.jpg',
  person: 'Taylor Mckenzy',
  title: 'The best',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},{
  img: 'https://randomuser.me/api/portraits/men/52.jpg',
  person: 'Taylor Mckenzy',
  title: 'Good time',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},{
  img: 'https://randomuser.me/api/portraits/men/51.jpg',
  person: 'Taylor Mckenzy',
  title: 'i want more of that!!',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [{
      breakpoint: 1800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <div className='container__workers  section__paddingOpinion' id='more'>
        <h2><span>what people think</span> about us</h2>
      <Slider {...settings}>
      {dataWorkers.map(item=>(
        <div className='card'>
          <div className='card-bottom'>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className='container__svg'></div>
          </div>
          <div className='card-top'>
            <img src={item.img} alt="t-shirt"/>
            <h3>{item.person}</h3>
           <div className='container__start'>
            <img src={start} alt="stars"/></div> 
          </div>
        </div>
        ))}
      </Slider>
    </div>
    )
  }
export default Workers;