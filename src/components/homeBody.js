import React from 'react'

const HomeBody = () => {
    return (
        <div className="container-fluid container-home-body"> 
            <div className="row">
                <div className="col-md-4 body-img-1">
                    <img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-app-mockup.png" alt="swipe app"/>
                </div>
                <div className="col-md-8 body-text body-text-1">
                    <p className=".col-md-3 subtext jumbo-home-subtext">
                        <h1>Unlimited Cashback</h1>
                        With Swipe, the more loyal you are the more cashback you earn. Are you a regular at your local coffee shop? You could earn up to 50% more cashback than other shoppers at that location.<br/>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 body-text body-text-2">
                    <p className=".col-md-3 subtext jumbo-home-subtext">
                        <h1>Automatic Cashback</h1>
                        Our goal is to make your life as easy as possible. All you have to do on your end is download our app, add your card, and shop at any of our partner locations. Every time you swipe your linked card you earn cashback, automatically.<br/>
                    </p>
                </div>
                <div className="col-md-4 body-img-2">
                    <img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-app-mockup.png" alt="swipe app"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 body-img-3">
                <img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-app-mockup.png" alt="swipe app"/>
                </div>
                <div className="col-md-8 body-text body-text-3">
                    <p className=".col-md-3 subtext jumbo-home-subtext">
                        <h1>Send Money, Anywhere</h1>
                        Swipe gives you real cash that you can transfer to your bank account, spend at merchants, or send to your friends.<br/>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 body-text body-text-4">
                <p className=".col-md-3 subtext jumbo-home-subtext">
                        <h1>Get Cash or Cryptocurrencies</h1>
                        You have the option to be rewarded in cryptocurrency or redeem your cashback for cryptocurrency.<br/>
                    </p>
                </div>
                <div className="col-md-4 body-img-4">
                    <img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-app-mockup.png" alt="swipe app"/>
                </div>
            </div>
        </div>

    )
}

export default HomeBody;