import React, {Component} from 'react';
import { Input, Form, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Store from '../../imports/redux/store/store';
import Order from './Order.jsx';

export default class OrderHistory extends Component {
	constructor(props) {
		super(props);
	}

	renderOrders() {
		if(this.props.orders && Meteor.user()) {
			let orders = this.props.orders;
			const currentUsername = Meteor.user().username;

			let filteredOrders = orders.filter((order) => {
	      if(order.customerName == currentUsername) {
	        return true;
	      } else {
	        return false;
	      }
	    });

			return filteredOrders.map((orders) => {
				return (
					<Order id={order._id} />
				);
			});
		}
	}

	render() {
		return(
			<ul>
				{this.renderOrders()}
			</ul>
		);
	}
}
