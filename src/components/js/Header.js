import React, { Component } from 'react';
import '../css/Header.css';
import logo from '../../assets/images/funeral-services-logo.png';

class Header extends Component {
  render() {
    return (
      <header id="header">
            <div className="header-inner container">
              <div className="nav-holder">
                <div id="top-logo" className="logo order1"><img
                 src={logo}
                   alt="funeral-services-logo"/>
                </div>
                <nav id="nav" className="text-uppercase order2">
                  <ul className="main-navigation">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a className="nav-services" href="#">
                        Browse Our Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-write-a-review" href="#">
                        Write a Review
                      </a>
                    </li>
                    <li>
                      <a className="nav-read-reviews" href="#">
                        Read Reviews
                      </a>
                    </li>
                    <li>
                      <a className="nav-contact" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul className="support-navigation">
                    <li><a className="login" href="#">LOG IN</a></li>
                    <li><a className="signup" href="#">SIGN UP</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
    );
  }
}

export default Header;
