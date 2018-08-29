import React, { Component } from 'react'

class JumbotronContact extends Component {
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
                            <br/>>we aim to empower the small business with unrivaled analytics, retention, and processing,
                            and processing.
                            <span className="highlight">
                            <i>And we do it all for free.</i>
                            </span>
                        </h2>
                        <br/>
                        <p>
                            <span className="highlight">Interested in what we can offer?</span>
                            <a href="#">Contact us.</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default JumbotronContact