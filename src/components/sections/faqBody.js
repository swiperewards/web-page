import React, { Component } from 'react'

class FAQBody extends Component {
    render () {
        return (
            <div>
                <section className="faq">
                    <div className="container">
                    <div className="row" style={{position: 'relative'}}>
                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: Is it really free?</h5>
                        <p>Yes it is free and users of our mobile app have a stake in the pool to earn greater cashback rewards.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: How does the cashback work?</h5>
                        <p>You add the card(s) you want to use. The cashback comes every time you use a registered card at one of our merchants. The more loyal you are, the more cashback you earn. </p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: How can I make money?</h5>
                        <p>Our cashback is unlimited. Meaning, your cashback can go over 100%.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: What’s the catch?</h5>
                        <p>There is no catch. Your favorite stores want more consumers and we give you cashback for staying loyal. Everyone wins. </p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: When will the app be released?</h5>
                        <p>September 2018.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: Where will I be able use the app?</h5>
                        <p>Any major city that has merchants added to our network.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: What cards can I use with Nouvo?</h5>
                        <p>All debit and credit cards are eligible.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: I have a question you haven’t answered.</h5>
                        <p>Send us an email at contact@nouvo.io</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: can I suggest a merchant to Nouvo?</h5>
                        <p>Absolutely. Email contact@nouvo.io</p>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="cta">
                    <div className="container">
                    <div className="row" style={{position: 'relative'}}>
                        <div className="col-sm-12 text-center">
                        <h4 className="mb-4">Ready to drive more customers to your business?</h4>
                            <a className="btn btn-primary" href="merchant.html">Coming Soon</a>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default FAQBody