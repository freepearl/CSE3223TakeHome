import React, {Component} from 'react';
import { Input, Form, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Store from '../../imports/redux/store/store';

export default class ProductList extends Component {
	constructor(props) {
		super(props);
	}

	orderBtnClicked(product) {
		const ourUsername = Meteor.user().username;
    if(ourUsername != null) {
			Meteor.call('orders.insert', ourUsername, product);
		}
  }

	render() {
		let products = Store.getState().rootReducer.products;

		return(
      <div id="left">
          <header className="all-products">
            All products
          </header>
          <ul id="productList">
            {
              products.map((product) => {
								return (
									<li className="product" key={product._id}>
										{product.name}
										<div className="orderBtn">
											<button type="submit" onClick={() => {this.orderBtnClicked(product)}}>Sipariş Et</button>
										</div>
									</li>
								);
              })
            }
          </ul>
      </div>
		);
	}
}
