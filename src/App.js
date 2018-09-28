import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import FAQ from './containers/FAQ';
import Merchant from './containers/Merchant';
import Contact from './containers/Contact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './scrollToTop';
import PrivacyPolicy from './containers/Privacy';





class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/faqs' component={FAQ}/>
            <Route path='/merchant' component={Merchant}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/privacypolicy' component={PrivacyPolicy}/>
          </Switch>
        </ScrollToTop>
      </React.Fragment>
    );
  }
}

export default App;
