import React, { Component } from 'react';

import '../css/Make-Arrangements.css';

class MakeArrganements extends Component {
  render() {
    return (
      <div class="intro-block col col6">
        <article class="broucher-block">
          <div class="block-holder">
            <div class="description-wrap">
              <h2>Funeral and Cremation Arrangements.</h2>
              <div class="hidden-xs">
                <p>Please select </p>
              </div>
            </div>
          </div>
          <ul class="btn-holder">
              <li>
                <a href="#" class="btn btn-default">IMMEDIATE HELP</a>
              </li>
              <li>
                <a href="#" class="btn btn-default">PLAN AHEAD</a>
              </li>
            </ul>
        </article>
      </div>
    )
  }
}

export default MakeArrganements;
