import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Styling Components incl css baseline for normalize.css

import './sass/styles.css'

ReactDOM.render(
    <Router>
            <App/>
    </Router>, 
document.getElementById('root'));

registerServiceWorker();