import React, { Component } from 'react';
import Navbar from '../components/navigation/navbar';
import JumbotronFAQ from '../components/jumbotron/jumbotronFAQ';
import FAQBody from '../components/sections/faqBody';
import Footer from '../components/footer/footer';

class FAQ extends Component {
    render () {
        return (
            <div className="faq">
                <Navbar/>
                <JumbotronFAQ/>
                <FAQBody/>
                <Footer/>
            </div>
        )
    }
}

export default FAQ