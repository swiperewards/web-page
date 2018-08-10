import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Merchant from './containers/Merchant';
import Contact from './containers/Contact';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/merchant' component={Merchant}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
