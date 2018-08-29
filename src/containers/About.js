import React, { Component } from 'react'
import Navbar from '../components/navigation/navbar';
import JumbotronAbout from '../components/jumbotron/jumbotronAbout';
import AboutBody from '../components/sections/aboutBody';
import Footer from '../components/footer/footer';

class About extends Component {
    render () {
        return (
            <div className="about">
                <Navbar/>
                <JumbotronAbout/>
                <AboutBody/>
                <Footer/>
            </div>
        )
    }
}

export default About;