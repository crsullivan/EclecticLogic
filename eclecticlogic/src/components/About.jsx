import React from 'react';
import '../About.css';

const About = () => { 

      return (
        <div className="About">
          <div className="topAbout">
            <h1 className="visionTitle">Our Vision:</h1>
            <h1 className="call">Software is the next frontier. EclecticLogic's goal is to make pioneering that frontier accessible to Everyone in a way that accurately reflects their needs and ideals.</h1>
          </div>  
          <div className="ceo">
            <h1 className="ceoTitle">CEO & Founder:</h1>
            <h1 className="ceoDescription">Graduate of Lambda School and Northern Arizona University, Connor Sullivan founded EclecticLogic in the greater Tucson, AZ area in late August of 2020 after recognizing the need for a web development and consulting service that dealt with clients that had the desire or necessity for fully custom, non-templated websites. The passion behind this service exists in two fundamental maxims. Full customization requires a high level of communication between clients and developers which results in a website that more accurately reflects the clients needs and ideals, and developers are more adept at creating incredible web services when the code they write is entirely their own.  </h1>
          </div>
        </div>
      )
    }
  
export default About;