import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './containers/Products/products';
import Homepage from './components/Homepage/Homepage';
import Orders from './containers/Orders/Orders';
import CheckOut from './containers/Checkout/Checkout';
import ShowProduct from './containers/Products/show_product';
import { Link } from 'react-router-dom';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/products/:productId' component={ShowProduct} />
          <Route path='/products' exact component={Products} />
          <Route path='/orders' component={Orders} />
          <Route path='/checkout' component={CheckOut}/>
          <Route path='/auth' component={Auth}/>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
