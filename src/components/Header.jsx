import React, { Component } from 'react';

import '../scss/components/_header.scss'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="header">
        <span className="header__heading-circle"></span>
        <div className="header__heading">
          <span><p>Styled HTML, REACT and VUE Components</p></span>
          <span><p>for the Web and Mobile</p></span>
          <div className="header__heading--btns">
            <span>Browse</span>
          </div>
        </div>
        <div className="header__half header__half--1">
        </div>
        <div className="header__half header__half--2">
        </div>
      </div>
    )
  }
}

export default Header;