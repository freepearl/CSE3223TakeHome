import React, {Component} from 'react';
import { Input, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Store from '../../imports/redux/store/store';
import ReactDOM from 'react-dom';

export default class Cart extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let cartProducts = Store.getState().rootReducer.cartProducts;

		return(
      <div id="left">
          <header className="cart-products">
            You have { cartProducts.size } products in cart
          </header>
          <ul id="productList">
            {
              cartProducts.map((product) => {
								return (
									<li className="product" key={product._id}>
										{product.name}
									</li>
								);
              })
            }
          </ul>
      </div>
		);
	}
}
