import React, { Component } from 'react';
import AppMockupHomeImage from '../../img/swipe-app-mockup-home.png';

class MerchantBody extends Component {
    render () {
        return (
            <div>
                <section className="summary">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="text-center">
                            <h3 className="mb-3">Boost Margins. Reduce Costs.</h3>
                            <div className="col-lg-6 offset-lg-3">
                            <p className="subtext">
                                Take your business to the next level. Nouvo is the perfect tool to acquire and retain customers no cost to you - the merchant.
                            </p>
                            <br/>
                            <br/>
                            <iframe className="video-iframe" width="560" height="315" src="https://www.youtube.com/embed/_i42kEoEunA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="summary hiw">
                    <div className="container h-100">
                    <div className="row h-100" style={{position: 'relative'}}>
                        <div className="col-lg-12 my-auto text-center">
                        <h3>How It Works</h3>
                        <div className="col-lg-6 offset-lg-3">
                            <p className="subtext-small mb-5">
                            {/* Input some text here if needed */}
                            </p>
                        </div> 
                        </div>
                        <div className="hiw-img-container">
                        <div className="hiw-vline" style={{margin: '6rem auto 1rem'}}></div>
                        <div className="hiw-hline" style={{left: '10%'}}></div>
                        <img src={AppMockupHomeImage} className="hiw-img-feature"/>
                        <div className="hiw-hline" style={{right: '10%'}}></div>
                        <div className="hiw-vline" style={{margin: '1rem auto'}}></div>
                        </div>
                        <div className="col-sm-6 my-5 hiw-item">
                        <div className="col-sm-8 inner-div">
                            <h5 className="hiw-title">1. Nouvo</h5>
                            <p className="hiw-content">Nouvo processes your payments and uses accrued credit card transaction fees to form reward pools.</p>
                        </div>  
                        </div>
                        <div className="col-sm-6 my-5 hiw-item">
                        <div className="col-sm-8 inner-div">
                            <h5 className="hiw-title">2. Cashback Rewards</h5>
                            <p className="hiw-content">These reward pools work by using our proprietary tiered-rewards technology to provide the consumer automatic
                            cashback every time they shop at your location.</p>
                        </div>
                        </div>
                        <div className="col-sm-6 my-5 hiw-item">
                        <div className="col-sm-8 inner-div">
                            <h5 className="hiw-title">3. Loyalty</h5>
                            <p className="hiw-content">We reward loyalty. The more loyal a customer is to your business, the more cashback they will receive.</p>
                        </div>
                        </div>
                        <div className="col-sm-6 my-5 hiw-item">
                        <div className="col-sm-8 inner-div">
                            <h5 className="hiw-title">4. All for free</h5>
                            <p className="hiw-content">The best part? We do this all at no additional cost to you. </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="summary pricing">
                    <div className="container h-100">
                    <div className="row h-100" style={{position: 'relative'}}>
                        <div className="col-lg-12 my-auto text-center">
                        <h3>Pricing</h3>
                        </div>
                        <div className="col-lg-6 my-5 pricing-card">
                        <div className="col-sm-9 card mx-auto">
                            <div className="card-body text-center px-4 py-5">
                                <h5 className="hiw-title">Acquition, Retention and Analytics</h5>
                                <p className="price-tag">Coming soon</p>
                                <p className="small highlight-tag">Flat Rate</p>
                                <p className="caption">Gain and Retain Customers Without Processing With Us</p>
                                <hr className="card-divider mt-4 mb-5"/>
                                <p>Get our customer acquisition and retention tool-set without processing with us.</p>
                                <p>Maybe another item can be set here, something that can get their attention.</p>
                                <p>Pay a monthly fee of $49.99 to use our system.</p>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Coming Soon
                                </button>
                            </div>
                        </div>
                        </div>

                         {/* <div class="col-lg-6 my-5 pricing-card">
                            <div class="col-sm-9 card mx-auto">
                                <div class="card-body text-center px-4 py-5">
                                    <h5 class="hiw-title">Acquition, Retention and Analytics</h5>
                                    <p class="price-tag">Coming soon</p>
                                    <p class="caption">Gain and Retain Customers Without Processing With Us</p>
                                    <hr class="card-divider mt-4 mb-5"/>
                                    <p>Get our customer acquisition and retention tool-set without processing with us.</p>
                                    <p>Maybe another item can be set here, something that can get their attention.</p>
                                    <p>Pay a monthly fee of $49.99 to use our system.</p>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                        Select Plan
                                    </button>
                                </div>
                                </div>
                                </div> */}

                        <div className="col-lg-6 my-5 pricing-card">
                            <div className="col-sm-9 card mx-auto popular">
                            <div className="card-body text-center px-4 py-5">
                                <h5 className="hiw-title">Per Swipe, Dip, or <br/> Tap</h5>
                                <br/>
                                <p className="price-tag" style={{marginTop:'8px'}}>Coming Soon</p>
                                <p className="small highlight-tag">Decreases with volume</p>
                                <p className="caption">Retention, Acquistion and Analytics Included In Price</p>
                                <hr className="card-divider mt-4 mb-5"/>
                                <p>We process for you and use what would normally be our revenue to feed your rewards system.</p>
                                <p>You acquire more customers and retain your current ones at no additional cost.</p>
                                <p>Custom pricing for larger merchants.</p>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Coming Soon
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MerchantBody