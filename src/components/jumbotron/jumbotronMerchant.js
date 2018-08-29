import React, { Component } from 'react'
import PlayImage from '../../img/ic-play-circle.svg';
import ClientHeroImage from '../../img/client-hero.png';

class JumbotronMerchant extends Component {
    render () {
        return (
            <header className="masthead">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-7 my-auto">
                  <img src={ClientHeroImage} className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-5 my-auto">
                  <div className="header-content">
                    <h1 className="mb-3">Swipe to Save</h1>
                    <p className="mb-5 subtext">
                      Swipe is the revolutionary new tool that will help you retain your current customers, obtain new customers, and reduce your
                      processing costs - all in one package.
                    </p>
                    <a className="btn btn-primary">Coming Soon</a> 
                    <div className="video-link">
                      <a className="btn-text btn-icon">
                        <img src={PlayImage}/> Play video to learn more.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default JumbotronMerchant