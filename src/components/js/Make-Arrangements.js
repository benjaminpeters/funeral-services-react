import React, { Component } from 'react';

import '../css/Make-Arrangements.css';

class MakeArrganements extends Component {
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
              <li>
                <a href="#" className="btn btn-default">IMMEDIATE HELP</a>
              </li>
              <li>
                <a href="#" className="btn btn-default">PLAN AHEAD</a>
              </li>
            </ul>
        </article>
      </div>
    )
  }
}

export default MakeArrganements;
