import React from 'react'
import '../Nav.css';

const Nav = () => { 

      return (
        <div className="navbar">
            <nav>
              <div className="navTitle">
                <a>EclecticLogic</a>
              </div>
              <div className="navlink">
                <a>Contact</a>
                <a>About</a>
                <a>Blog</a>
              </div>  
            </nav>
        </div>
      )
    }
  
export default Nav;