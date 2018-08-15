import React, { Component } from 'react';
import Navbar from '../components/navbar';
import JumboHome from '../components/jumboHome';
import HomeBody from '../components/homeBody';
import HomeBodyMobile from '../components/homeBodyMobile';
import Section2 from '../components/section2';
import FooterSection from '../components/footer';
import JumboHomeMobile from '../components/jumboHomeMobile';


class Home extends Component {
    constructor(props) {
            super(props);
            this.state = { width: 0, height: 0, isDesktop: false };
            this.updatePredicate = this.updatePredicate.bind(this);
        }

        componentDidMount() {
          this.updatePredicate();
          window.addEventListener("resize", this.updatePredicate);
        }
      
        componentWillUnmount() {
            this.updatePredicate();
            window.removeEventListener("resize", this.updatePredicate);
        }
      
        updatePredicate() {
            window.addEventListener("resize", this.updatePredicate)
            if(window.innerWidth > 700){
                this.setState({ width: window.innerWidth, height: window.innerHeight, isDesktop:true })
            }
            else return this.setState({ width: window.innerWidth, height: window.innerHeight })
        }
      
    render () {
        console.log(this.state);
        const isDesktop = this.state.isDesktop;
        let viewportType;
        let jumboType;

        if (isDesktop) {
            viewportType = <HomeBody/> ;
            jumboType = <JumboHome/>;
          } else {
            jumboType = <JumboHomeMobile/>;
            viewportType =  <HomeBodyMobile/>
          }
        return (
            <div>
                <Navbar/>
                <div isDesktop={isDesktop}>{jumboType}</div>
                <div isDesktop={isDesktop}>{viewportType}</div>
                <Section2/>
                <FooterSection/>
            </div>
        )
    }
}

export default Home;