import React, { Component } from 'react';

import '../scss/components/_menu.scss'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: []
    }
  }

  lengthOfItemsInCartArray = () => {
    const { itemsInCart } = this.state;
    if (itemsInCart.length < 1) {
      return;
    }

    return <span className="menu__item--cart-length">{itemsInCart.length}</span>
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
        <div className="menu__item">Tools by us</div>
        <div className="menu__item">Support</div>
        <div className="menu__item">About</div>
        <div className="menu__item menu__item--signup">
          <svg className="menu__item--svg-signup">
            <use xlinkHref="./img/sprite.svg#icon-user" />
          </svg>
          <div><p>Login/Signup</p></div>
        </div>
        <div className="menu__item menu__item--last">
          {this.lengthOfItemsInCartArray()}
          <svg className="menu__item--svg">
            <use xlinkHref="./img/sprite.svg#icon-cart" />
          </svg>
        </div>
      </div>
    )
  }
}

export default Menu;