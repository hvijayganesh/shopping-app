import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
// import "bootstrap/dist/css/bootstrap.min.css"
import LandingPage from './components/landing-page/LandingPage';
import Cart from './components/cart/Cart';
import MyOrders from './components/my-orders/MyOrders';
import { OrderConfirmation } from './components/order-confirmation/OrderConfirmation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/my-orders' component={MyOrders} />
            <Route exact path='/order-confirmation' component={OrderConfirmation} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
