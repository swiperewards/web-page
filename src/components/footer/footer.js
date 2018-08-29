import React, { Component } from 'react'
import SwipeLogoWhite from '../../img/swipe-logo-final-white.png';

class Footer extends Component {
    render () {
        return (
        <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mb-3 text-left company-info">
                  <img src={SwipeLogoWhite} className="mb-3" style={{height: '32px'}}/>
                  <div className="mb-3 social">
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook mr-3"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fa fa-twitter mr-3"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fa fa-linkedin mr-3"></i>
                    </a>
                  </div>
                  <p>
                    <small>© 2018, swiperewards.io . All rights reserved.</small>
                  </p>
                </div>

                <div className="col-lg-1 mb-3">
                </div>

                <div className="col-lg-2 mb-3 text-left">
                  <p className="column-title">
                    <strong>About</strong>
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer