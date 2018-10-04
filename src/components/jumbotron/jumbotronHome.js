import React, { Component } from 'react'
import JumboAppImage from '../../img/swipe-app-mockup-home.png';
import appstoreLogo from '../../img/google-play-badge.svg';
import googleplayLogo from '../../img/app-store-badge.svg';

class JumbotronHome extends Component {
    render () {
        return (
            <header className="masthead">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-sm-5 my-auto order-md-last order-lg-last">
                  <div className="device-container">
                    <div className="device-mockup portrait white">
                      <div className="device">
                        <div className="screen">
                          <div className="card-bg card-bg-right"></div>
                          <img src={JumboAppImage} className="img-fluid" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7 my-auto order-md-first order-lg-first">
                  <div className="header-content">
                    <h1 className="mb-3">Save with Nouvo</h1>
                    <p className="mb-5 subtext">
                    Nouvo is the best way to receive cashback for shopping at the places you love. Just add your card(s) and start shopping to automatically receive up to 100% cashback.
                    </p>
                    <div className="jumbo-home-nativestore">
                        <img src={googleplayLogo} width="105px" height="105px" alt="google play icon"/>
                        <img src={appstoreLogo} width="105px" height="105px" alt="apple app store icon"/>
                    </div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#subscriptionForm">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default JumbotronHome