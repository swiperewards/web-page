import React, { Component } from 'react'
import Navbar from '../components/navigation/navbar';
import JumbotronMerchant from '../components/jumbotron/jumbotronMerchant';
import MerchantBody from '../components/sections/merchantBody';
import Footer from '../components/footer/footer';

class Merchant extends Component {
    render () {
        return (
            <div className="client">
                <Navbar/>
                <JumbotronMerchant/>
                <MerchantBody/>
                <Footer/>
            </div>
        )
    }
}

export default Merchant;