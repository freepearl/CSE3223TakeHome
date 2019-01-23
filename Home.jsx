import React, {Component} from 'react';
import { Input, Form, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import loadUsers from '../redux/actions/loadUsers';
import loadOrders from '../redux/actions/loadOrders';
import Store from '../../imports/redux/store/store';
import ProductList from './ProductList.jsx';
import Cart from './Cart.jsx';
import OrderHistory from './OrderHistory.jsx';
import SearchURI from './SearchURI.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(loadUsers());
    this.props.dispatch(loadOrders());
  }

  render() {
    return (
      <div className="container">
        <ProductList />
        <div id="center">
            <header className="centerHeader">
              <SearchURI />
              <h1>Hepsiburada</h1>
              <AccountsUIWrapper />
              <Cart />
            </header>
          <OrderHistory orders={this.props.orders} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.rootReducer.messages,
    currentUser: Meteor.user(),
  }
}

export default connect(mapStateToProps)(Home);
