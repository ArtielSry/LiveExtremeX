import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='product__blog section__padding' id='blog'>
      <div className='product__blog-heading'>
        <h1 className='text-gradient'><span>Latest news</span> from live extreme</h1>
      </div>
      <div className='product__blog-container'>
        <div className='product__blog-container_A'>
          <Article imgUrl={blog01} text="Finalists in motocross competition"/>
        </div>
        <div className='product__blog-container_B'>
          <Article imgUrl={blog02} text="First skydiving lessons" alt="blog1"/>
          <Article imgUrl={blog03} text="best summer activities" alt="blog1"/>
          <Article imgUrl={blog04} text="Climbing trees" alt="blog1"/>
          <Article imgUrl={blog05} text="Read our winner's story" alt="blog1"/>
        </div>
      </div>
    </div>
  )
}

export default Blog