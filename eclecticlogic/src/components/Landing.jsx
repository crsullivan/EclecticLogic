import React from 'react';
import '../Landing.css';

const Landing = () => {

  return (
    <div className="mainContainer">
      <div className="header">
        <img className="logo" src={require("../images/E_lecticLogi_ Logo (3).png")}  width="400" height="400" alt="Omega2020 logo" />
        <h1>wefbhj</h1>
      </div>  
      <div className="body">
        <div className="pair">
          <div className="category">
            <i class="far fa-question-circle fa-5x"></i>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className="category">
            <i class="fas fa-user fa-5x"></i>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
        <div className="pair">
          <div className="category">
            <i class="fas fa-poll fa-5x"></i>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className="category">
            <i className="fas fa-seedling fa-5x"> </i>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;