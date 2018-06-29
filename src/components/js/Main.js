import React, { Component } from 'react';

import '../css/Main.css';
import mainimage from '../../assets/images/funeral-services-home.jpg';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <img src={mainimage} width="100%"/>
      </div>
    )
  }
}

export default Main;
