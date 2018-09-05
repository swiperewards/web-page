import React, { Component } from 'react'
import NouvoLogo from '../../img/nouvo_final.png';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render () {
        return (

            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:'#FFFFFF'}} id="mainNav">
              <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">
                  <img src={NouvoLogo} height="75'%'"/>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li> 
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faqs" className="nav-link">FAQs</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/merchant" className="nav-link">Merchant</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

        )
    }
}

export default Navbar