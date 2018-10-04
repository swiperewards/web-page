import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NouvoLogoWhite from '../../img/Nouvo-Logo-150x150.png'

class Footer extends Component {
    render () {
        return (
        <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mb-3 text-left company-info">
                  {/* <img src={NouvoLogoWhite} className="mb-3" style={{height: '32px'}}/> */}
                  <div className="mb-3 social">
                    <a href="https://www.facebook.com/nouvoapp/" target="_blank">
                      <i className="fa fa-facebook mr-3"></i>
                    </a>
                    <a href="https://twitter.com/Nouvoapp" target="_blank">
                      <i className="fa fa-twitter mr-3"></i>
                    </a>
                    <a href="https://t.me/nouvo" target="_blank">
                      <i className="fa fa-telegram mr-3"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCIhCsBB4nj0rK3rYrETtp4Q" target="_blank">
                      <i className="fa fa-youtube mr-3 "></i>
                    </a>
                    <a href="https://www.linkedin.com/company/nouvoapp/" target="_blank">
                      <i className="fa fa-linkedin mr-3 "></i>
                    </a>
                  </div>
                  <p>
                    <small>© 2018, Nouvo.io . All rights reserved.</small>
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
                      <Link to="/privacypolicy">Privacy Policy</Link>
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