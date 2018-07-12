import React, { Component } from 'react';

import '../css/Make-Arrangements.css';

class MakeArrganements extends Component {

  constructor(props) {
      super(props);
      this.state = {
        clicked: false,
        arrangeClose: '600px',
        arrangeOpen: '1200px'
      };

      this.handleClick = this.handleClick.bind(this);
    }

  handleClick (event) {

    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <div className='intro-block col col6'
       style={this.state.clicked ? { width: `${this.state.arrangeOpen}` } : { width: `${this.state.arrangeClose}` }}>
        <article className="broucher-block">
          <div className="block-holder">
            <div className="description-wrap">
              <h2>Funeral and Cremation Arrangements.</h2>
            </div>
          </div>
          <ul className="btn-holder">
              <li className="btn btn-default" onClick={this.handleClick}>
                IMMEDIATE HELP
              </li>
              <li className="btn btn-default" onClick={this.handleClick}>
                PLAN AHEAD
              </li>
            </ul>
        </article>
      </div>
    )
  }
}

export default MakeArrganements;
