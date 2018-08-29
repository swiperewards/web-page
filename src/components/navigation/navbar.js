import React, { Component } from 'react'
import SwipeLogo from '../../img/swipe-logo-final.png';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
              <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <img src={SwipeLogo} height="28px"/>
              </a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fa fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
                  </li> 
                  <li class="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="faq.html">FAQs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="merchant.html">Merchant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar