import React from 'react';
import './article.css';

const Article = ({ imgUrl, text}) => {
  return (
    <div className='product__blog-container_article'>
      <div className='product__blog-container_article-image'>
        <img src={imgUrl} alt="blog"/>
      </div>
      <div className='product__blog-container_article-content'>
        <h3>{text}</h3>
      </div>
    </div>
  )
}

export default Article