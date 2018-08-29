import React, { Component } from 'react'
import CashbackBackground from '../../img/cashback-bg.png';
import WalletMockupTx from '../../img/swipe-app-mockup-wallet-transactions.png';
import AutomaticCashback from '../../img/automatic-cashback-bg.png'; 
import MockupWallet from '../../img/swipe-app-mockup-wallet.png';
import SendMoney from '../../img/send-money-bg.png';
import RedeemBank from '../../img/swipe-app-mockup-redeem-bank.png';
import CryptoBg from '../../img/crypto-bg.png';
import RedeemCrypto from '../../img/swipe-app-mockup-redeem-crypto.png';
import MockupAppHome2 from '../../img/swipe-app-mockup-home-2.png';


class HomeBody extends Component {
    render () {
        return (
            <div>
                <section class="feature" id="hiw">
                    <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-md-5 col-sm-5 my-auto">
                        <div class="device-container">
                            <div class="device-mockup portrait white">
                            <div class="device">
                                <div class="screen">
                                <div class="card-bg card-bg-left">
                                    <img src={CashbackBackground} style={{position: 'absolute', left: '90%',top: '-18%'}}/>
                                </div>
                                <img src={WalletMockupTx} class="img-fluid" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 col-sm-7 my-auto ml-sm-5">
                        <h3 class="mb-3">Unlimited Cashback</h3>
                        <p class="subtext">
                            With Swipe, the more loyal you are the more cashback you earn. Are you a regular at your local coffee shop? You could earn
                            up to 50% more cashback than other shoppers at that location.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="feature">
                    <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-md-5 col-sm-5 my-auto order-md-last offset-md-1">
                        <div class="device-container">
                            <div class="device-mockup portrait white">
                            <div class="device">
                                <div class="screen">
                                <div class="card-bg card-bg-right">
                                    <img src={AutomaticCashback} style={{position: 'absolute', left:' -44%', top: '-18%'}}/>
                                </div>
                                <img src={MockupWallet} class="img-fluid" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 col-sm-7 my-auto order-md-first">
                            <div class="">
                            <h3 class="mb-3">Automatic Cashback</h3>
                            <p class="subtext">
                                Our goal is to make your life as easy as possible. All you have to do on your end is download our app, add your card, and
                                shop at any of our partner locations. Every time you swipe your linked card you earn cashback, automatically.
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="feature">
                    <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-md-5 col-sm-5 my-auto">
                        <div class="device-container">
                            <div class="device-mockup portrait white">
                            <div class="device">
                                <div class="screen">
                                <div class="card-bg card-bg-left">
                                    <img src={SendMoney} style={{position: 'absolute', left: '102%', top: '-18%'}}/>
                                </div>
                                <img src={RedeemBank}class="img-fluid" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 col-sm-7 my-auto ml-sm-5">
                        <h3 class="mb-3">Send Money, Anywhere</h3>
                        <p class="subtext">
                            Swipe gives you real cash that you can transfer to your bank account, spend at merchants, or send to your friends.
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="feature">
                    <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-md-5 col-sm-5 my-auto order-md-last offset-md-1">
                        <div class="device-container">
                            <div class="device-mockup portrait white">
                            <div class="device">
                                <div class="screen">
                                <div class="card-bg card-bg-right">
                                    <img class="extras" src={CryptoBg} style={{position: 'absolute', left: '-34%', top: '-7%'}}/>
                                </div>
                                <img src={RedeemCrypto} class="img-fluid" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 col-sm-7 my-auto order-md-first">
                        <div class="">
                            <h3 class="mb-3">Get Cash or Cryptocurrencies</h3>
                            <p class="subtext">
                            You have the option to be rewarded in cryptocurrency or redeem your cashback for cryptocurrency.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section class="cta feature text-center">
                    <div class="container">
                    <img class="mb-5 cta-photo" src={MockupAppHome2}/>
                    <h3 class="mb-3">
                        All for Free
                    </h3>
                    <p class="subtext mb-5">
                        You make money.
                        <br/> Your local businesses gain loyal customers.
                        <br/>
                        <strong>
                        <i>Everyone wins.</i>
                        </strong>
                    </p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="subscriptionForm2">
                        Get Early Access
                    </button>
                    <div class="modal fade" id="subscriptionForm2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-body">
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfhkkl47WQ3peJnK4C3-lz8TW0Vsgae9tNrUxglqMIWgOyq4Q/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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

export default HomeBody