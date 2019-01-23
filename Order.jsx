import React, {Component} from 'react';
import { Input, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Orders } from '../api/orders.js';

export default class Order extends Component {
	constructor(props) {
		super(props);
	}

	like(order) {
		let count = order.likeCount + 1;
		Orders.update(order._id, { $set: { likeCount: count } });
	}

	dislike(order) {
		let count = order.dislikeCount + 1;
		Orders.update(order._id, { $set: { dislikeCount: count } });
	}

	render() {
		var id = this.props.id;
		let order = Orders.findOne({_id: id});

		return(
			<li id="order" key={order._id}>
				<div className="order-right">
					<Button onClick={this.like.bind(this, order)}>Like</Button>
					<Button className="minusBtn" onClick={this.dislike.bind(this, order)}>Dislike</Button>
				</div>
				<div className="order-left">
					<strong className="username">{order.username}</strong>: {order.name}
					<span className="likeDislike"><br /><br />{order.likeCount} likes {order.dislikeCount} dislikes</span>
				</div>
			</li>
		);
	}
}
