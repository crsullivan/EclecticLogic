import React from 'react'
import '../Nav.css';

const Nav = () => { 

      return (
        <div className="navbar">
            <nav>
              <div className="navTitle">
                <a href="http://localhost:3000/">EclecticLogic</a>
              </div>
              <div className="navlink">
                <a href="http://localhost:3000/contact">Contact</a>
                <a href="http://localhost:3000/about">About</a>
                <a href="http://localhost:3000/blog">Blog</a>
              </div>  
            </nav>
        </div>
      )
    }
  
export default Nav;