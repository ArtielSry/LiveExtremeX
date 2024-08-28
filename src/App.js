import React, { useEffect } from "react"; //rafce

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatProduct,
  Header,
  Workers,
} from "./containers"; // carpeta containers
import { CTA, Brand, Navbar } from "./components"; // carpeta components
import "./App.css";
import Splash from "./components/splash/Splash";

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div className="App">
      <Splash />
      <div className="animation">
        <div className="gradiente__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatProduct />
        <Possibility />
        <Features />
        <CTA />
        <Blog />
        <Workers />
        <Footer />
      </div>
    </div>
  );
};

export default App;
