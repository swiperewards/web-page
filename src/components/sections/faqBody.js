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
                        <p>Yes, it is free and users of our mobile app have a stake in the pool to earn greater cashback rewards.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: How does the cashback work?</h5>
                        <p>You just add the card(s) you want to use and the cashback will come every time you use a registered card at one of our merchants.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: Is there a limit to how much I can earn in cashback?</h5>
                        <p>Not at all. Our cashback is unlimited. That means you can earn over 100% of what you spend in cashback.</p>
                        </div>

                        <div className="col-lg-6 col-sm-12 offset-lg-3 faq-item mb-5">
                        <h5>Q: What’s the catch?</h5>
                        <p>Your favorite stores gain customers and you earn cash for shopping there.</p>
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
                        <h5>Q: Can I suggest a merchant?</h5>
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