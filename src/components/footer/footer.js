import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SwipeLogoWhite from '../../img/swipe-logo-final-white.png'

class Footer extends Component {
    render () {
        return (
        <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mb-3 text-left company-info">
                  <img src={SwipeLogoWhite} className="mb-3" style={{height: '32px'}}/>
                  <div className="mb-3 social">
                    <Link to="https://www.facebook.com/swiperewards/" target="_blank">
                      <i className="fa fa-facebook mr-3"></i>
                    </Link>
                    <Link to="https://twitter.com/Swiperewards?lang=en" target="_blank">
                      <i className="fa fa-twitter mr-3"></i>
                    </Link>
                    <Link to="https://t.me/SwipeRewards" target="_blank">
                      <i className="fa fa-telegram mr-3"></i>
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCIhCsBB4nj0rK3rYrETtp4Q" target="_blank">
                      <i className="fa fa-youtube mr-3 "></i>
                    </Link>
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
                      <Link to="/about">Company</Link>
                    </li>
                    {/* <li>
                      <a href="#">Careers</a>
                    </li> */}
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