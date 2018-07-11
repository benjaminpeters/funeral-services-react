import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component{
  render(){
    return (
      <footer id="footer" className="container">
        <p>&copy; <a href="#">Funeral Services</a>. All Rights Reserved.<span className="sep">|</span><a href="/">Privacy Policy</a></p>
      </footer>
    )
  }
}

export default Footer;
