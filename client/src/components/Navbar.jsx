import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <header id="header_main" className="header">
      <div className="container big">
        <div className="row">
          <div className="col-12">
            <div className="header__body">
              <div className="header__logo">
                <a href="index.html">
                  <img
                    id="site-logo"
                    src="assets/images/logo/logo.png"
                    alt="Peson"
                    width={190}
                    height={100}
                    data-retina="assets/images/logo/logo@2x.png"
                    data-width={160}
                    data-height={38}
                  />
                </a>
              </div>
              <div className="header__right">
                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li className="menu-item">
                      <Link to="/">Home</Link>
                      
                    </li>
                    <li className="menu-item ">
                      <a href="#">Get started!</a>
                      
                    </li>
                    <li className="menu-item">
                      <a href="roadmap.html">Pricing</a>
                    </li>
                  
                    <li className="menu-item">
                      <a href="contact.html">Articles</a>
                    </li>
                    <li className="menu-item">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="mobile-button">
                  <span />
                </div>
              </div>
              <div className="header__action">
                
                <a href="contact.html" className="action-btn">
                  <span>Join Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
   </>
  )
}

export default Navbar