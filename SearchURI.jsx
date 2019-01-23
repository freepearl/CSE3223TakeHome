import React, {Component} from 'react';
import { Input, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Store from '../../imports/redux/store/store';
import ReactDOM from 'react-dom';
import { Orders } from '../api/orders.js';
import changeURI from '../redux/actions/changeURI';

export default class SearchURI extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
    event.preventDefault();
		const uri = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		Store.dispatch(changeURI(uri));
  }

	render() {
		return(
			<form className="search-uri" onSubmit={this.handleSubmit.bind(this)}>
				<input
					type="text"
					ref="textInput"
					placeholder="Search URI"
				/>
			</form>
		);
	}
}
