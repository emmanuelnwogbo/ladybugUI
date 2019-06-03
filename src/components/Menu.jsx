import React, { Component } from 'react';

import '../scss/components/_menu.scss'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="menu">
        <div className="menu__app__name">
          <p>Ladybug <span>UI</span></p>
        </div>
        <div className="menu__search">
          <input placeholder={`Search here...`} className="menu__search--input"/>
        </div>
        <div className="menu__item">Npm packages</div>
        <div className="menu__item">Tools by us</div>
        <div className="menu__item">Say hello!</div>
        <div className="menu__item menu__item--signup">
          <svg className="menu__item--svg-signup">
            <use xlinkHref="./img/sprite.svg#icon-user" />
          </svg>
          <div><p>Login/Signup</p></div>
        </div>
        <div className="menu__item menu__item--last">
          <svg className="menu__item--svg">
            <use xlinkHref="./img/sprite.svg#icon-cart" />
          </svg>
        </div>
      </div>
    )
  }
}

export default Menu;