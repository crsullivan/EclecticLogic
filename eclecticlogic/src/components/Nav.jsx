import React from 'react'
import '../Nav.css';

const Nav = () => { 

      return (
        <div className="navbar">
            <nav>
              <div className="navTitle">
                <a href="https://eclectic-logic.vercel.app/">EclecticLogic</a>
              </div>
              <div className="navlink">
                <a href="https://eclectic-logic.vercel.app/contact">Contact</a>
                <a href="https://eclectic-logic.vercel.app/about">About</a>
                <a href="https://eclectic-logic.vercel.app/blog">Blog</a>
              </div>  
            </nav>
        </div>
      )
    }
  
export default Nav;