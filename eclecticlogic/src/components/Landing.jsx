import React from 'react';
import '../Landing.css';

const Landing = () => {

  return (
    <div className="mainContainer">
      <div className="header">
        <img className="logo" src={require("../images/E_lecticLogi_ Logo (3).png")}  width="400" height="400" alt="Omega2020 logo" />
        <p>wefbhj</p>
      </div>  
      <div className="body">
        <div className="pair">
          <div className="category">
            <p className="logoplaceholder">logo</p>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className="category">
            <p className="logoplaceholder">logo</p>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
        <div className="pair">
          <div className="category">
            <p className="logoplaceholder">logo</p>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className="category">
            <p className="logoplaceholder">logo</p>
            <p className="description">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;