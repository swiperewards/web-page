import React, { Component } from 'react'
import Navbar from '../components/navbar';
import FooterSection from '../components/footer';
import JumboAbout from '../components/jumboAbout';
import AboutUsBody from '../components/aboutBody';

class About extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                <JumboAbout/>
                <AboutUsBody/>
            </div>
        )
    }
}

export default About;