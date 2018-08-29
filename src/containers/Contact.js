import React, { Component } from 'react'
import Navbar from '../components/navigation/navbar';
import JumbotronContact from '../components/jumbotron/jumbotronContact';
import ContactBody from '../components/sections/contactBody';
import Footer from '../components/footer/footer';

class Contact extends Component {
    render () {
        return (
            <div className="about">
                <Navbar/>
                <JumbotronContact/>
                <ContactBody/>
                <Footer/>
            </div>
        )
    }
}

export default Contact;