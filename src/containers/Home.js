import React, { Component } from 'react';
import Navbar from '../components/navigation/navbar';
import JumbotronHome from '../components/jumbotron/jumbotronHome';
import HomeBody from '../components/sections/homeBody';
import Footer from '../components/footer/footer';


class Home extends Component {
      
    render () {
        return (
            <div>
                <Navbar/>
                <JumbotronHome/>
                <HomeBody/>
                <Footer/>
            </div>
        )
    }
}

export default Home;