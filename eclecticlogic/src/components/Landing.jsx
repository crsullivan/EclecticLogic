import React from 'react';
import TopCarousel from './TopCarousel'
import '../Landing.css';

const Landing = () => {

  

  return (
    <div className="mainContainer">
      <div className="carouselSection">
        <div className="carouselContainer">
          <TopCarousel />
        </div>
      </div>
    </div>
  );
};

export default Landing;