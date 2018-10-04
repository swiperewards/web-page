import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class JumbotronAbout extends Component {
    render () {
        return (
            <header className="masthead">
                <div className="row my-5 mt-7 blue-bg" id="hero" style={{backgroundPositionX: '1014.83px'}}>
                    <div className="background-bg" id="hero-mobile" style={{height: '512px'}}>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 about-hero-text my-5 py-5">
                        <h2>
                        Our mission is simple - 
                        <br/>we aim to empower the small business with more customers, unrivaled analytics, and quality customer service. And we do it all for free
                            <span className="highlight">
                            <br/>
                            {/* <i>And we do it all for free.</i> */}
                            </span>
                        </h2>
                        <br/>
                        <p>
                            <span className="highlight">Interested in what we can offer? </span>
                            <Link to="/contact"> Contact us.</Link>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default JumbotronAbout