import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
// import Merchant from './containers/Merchant';
// import Contact from './containers/Contact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
