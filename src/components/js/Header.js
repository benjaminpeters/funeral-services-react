import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/Header.css';
import logo from '../../assets/images/funeral-services-logo.png';

import Main from './Main';
import OurPhilosophy from './Our-Philosophy';
import HowItWorks from './How-It-Works';
import Contact from './Contact';

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="header-main">
          <header id="header">
                  <div className="header-inner container">
                    <div className="nav-holder">
                      <div id="top-logo" className="logo order1">
                        <Link to="/">
                          <img
                           src={logo}
                             alt="funeral-services-logo"/>
                         </Link>
                      </div>
                      <nav id="nav" className="text-uppercase order2">
                        <ul className="main-navigation">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/our-philosophy">Our Philosophy</Link>
                          </li>
                          <li>
                            <Link to="/how-it-works">How It Works</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
              </header>

              <Route exact path="/" component={Main} />
              <Route exact path="/our-philosophy" component={OurPhilosophy} />
              <Route exact path="/how-it-works" component={HowItWorks} />
              <Route exact path="/contact" component={Contact} />
            </div>
          </Router>
    );
  }
}

export default Header;
