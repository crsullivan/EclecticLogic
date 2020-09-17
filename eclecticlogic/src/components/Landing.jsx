import React from 'react';
import TopCarousel from './TopCarousel'
import '../Landing.css';

const Landing = () => {

  

  return (
    <>
      <div className="splashDiv">
        <img className="splashLogo" src={require("../images/L_Thick-removebg-preview.png")}></img>
      </div>  
      <div className="mainContainer">
        <div className="carouselSection">
            <TopCarousel />
        </div>
        <div className="callTo">
          <h2>Market Yourself</h2>
          <h2>Market Your Business</h2>
          <h2>Market Your Philosophy</h2>  
        </div>
        <div className="icons">
          <div className="iconDiv">
            <div className="header">
              <i class="fas fa-user fa-5x"></i>
              <h1>Portfolios</h1>
            </div>
            <h3>awegwhiojveoijbwipbjpiwbjwipbjpiowb g jpigqwipg joiqweg iopgh pwi guhbeuiowg hohohseg sdfgn euoghgb noiwgh oihjg owuirghn owergbniwrjgbwsero gn o</h3>
          </div>
          <div className="iconDiv">
            <div className="header">
              <i class="far fa-question-circle fa-5x"></i>
              <h1>Consulting</h1>
            </div>
            <h3>awegwhiojveoijbwipbjpiwbjwipbjpiowb g jpigqwipg joiqweg iopgh pwi guhbeuiowg hohohseg sdfgn euoghgb noiwgh oihjg owuirghn owergbniwrjgbwsero gn o</h3>
          </div>
          <div className="iconDiv">
            <div className="header">
              <i class="fas fa-poll fa-5x"></i>
              <h1>Marketing</h1>
            </div>
            <h3>awegwhiojveoijbwipbjpiwbjwipbjpiowb g jpigqwipg joiqweg iopgh pwi guhbeuiowg hohohseg sdfgn euoghgb noiwgh oihjg owuirghn owergbniwrjgbwsero gn o</h3>
          </div>
          <div className="iconDiv">
            <div className="header">
              <i className="fas fa-seedling fa-5x"></i>
              <h1>Growth</h1>
            </div>
            <h3>awegwhiojveoijbwipbjpiwbjwipbjpiowb g jpigqwipg joiqweg iopgh pwi guhbeuiowg hohohseg sdfgn euoghgb noiwgh oihjg owuirghn owergbniwrjgbwsero gn o</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;