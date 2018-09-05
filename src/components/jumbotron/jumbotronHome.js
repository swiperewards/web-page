import React, { Component } from 'react'
import JumboAppImage from '../../img/swipe-app-mockup-home.png';
import appstoreLogo from '../../img/google-play-badge.svg';
import googleplayLogo from '../../img/app-store-badge.svg';

class JumbotronHome extends Component {
    render () {
        return (
            <header class="masthead">
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-sm-5 my-auto order-md-last order-lg-last">
                  <div class="device-container">
                    <div class="device-mockup portrait white">
                      <div class="device">
                        <div class="screen">
                          <div class="card-bg card-bg-right"></div>
                          <img src={JumboAppImage} class="img-fluid" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-7 my-auto order-md-first order-lg-first">
                  <div class="header-content">
                    <h1 class="mb-3">Nouvo To Earn</h1>
                    <p class="mb-5 subtext">
                      Nouvo is the best way to receive real cash for shopping at and being loyal to local businesses. Just add your card and start
                      swiping away to automatically receive up to 100% cashback.
                    </p>
                    <div className="jumbo-home-nativestore">
                        <img src={googleplayLogo} width="105px" height="105px" alt="google play icon"/>
                        <img src={appstoreLogo} width="105px" height="105px" alt="apple app store icon"/>
                    </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscriptionForm">
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