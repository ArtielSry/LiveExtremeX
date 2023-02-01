import React from 'react' //rafce

import { Footer, Blog, Possibility, Features, WhatProduct, Header, Workers }  from './containers'; // carpeta containers
import { CTA, Brand, Navbar } from './components'; // carpeta components
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gradiente__bg'>
    <Navbar />
    <Header />
      </div>
      <Brand />
      <WhatProduct />
      <Possibility />
      <Features />
      <CTA />
      <Blog />
      <Workers/>
      <Footer />
    </div>
  )
}

export default App