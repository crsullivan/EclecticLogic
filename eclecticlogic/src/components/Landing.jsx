import React from 'react';
import '../Landing.css';

const Landing = () => {

  return (
    <div className="mainContainer">
      <div className="header">
        <img className="logo" src={require("../images/E_lecticLogi_ Logo (3).png")}  width="400" height="400" alt="Omega2020 logo" />
        <div className="slogan"> 
          <h3>Beautiful Websites</h3>
          <h3>Accessibility</h3>
          <h3>Responsive Design</h3>
          <h3>Marketing</h3>
        </div>  
      </div>  
      <div className="body">
        <div className="pair">
          <div className="category">
            <i class="far fa-question-circle fa-5x"></i>
            <h2>Consulting</h2>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className="category">
            <i class="fas fa-user fa-5x"></i>
            <h2>Portfolios</h2>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
        <div className="pair">
          <div className="category">
            <i class="fas fa-poll fa-5x"></i>
            <h2>Marketing</h2>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className="category">
            <i className="fas fa-seedling fa-5x"> </i>
            <h2>Growth</h2>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;