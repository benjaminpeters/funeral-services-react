import React, { Component } from 'react';

import '../css/Make-Arrangements.css';

class MakeArrganements extends Component {

  onItemClick (event) {
      console.log("click");
  }

  render() {
    return (
      <div className="intro-block col col6">
        <article className="broucher-block">
          <div className="block-holder">
            <div className="description-wrap">
              <h2>Funeral and Cremation Arrangements.</h2>
            </div>
          </div>
          <ul className="btn-holder">
              <li className="btn btn-default" onClick={this.onItemClick}>
                IMMEDIATE HELP
              </li>
              <li className="btn btn-default" onClick={this.onItemClick}>
                PLAN AHEAD
              </li>
            </ul>
        </article>
      </div>
    )
  }
}

export default MakeArrganements;
