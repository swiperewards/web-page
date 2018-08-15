import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Button } from 'mdbreact';

class FixedNavbarExample extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false,
          headerColor: {backgroundColor: 'white'}
    };
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    onClick(){
    this.setState({
        collapse: !this.state.collapse,
        });
    }


    render() {


        return (
                <Navbar style={this.state.headerColor} light expand="md" scrolling fixed="top">
                    <NavbarBrand href="/">
                        <img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-logo-final.png" className="img-fluid" alt="swipe logo" width="70px"/>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav right>
                      <NavItem>
                          <NavLink to="/About">About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/">Merchant</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/">Contact Us</NavLink>
                      </NavItem>
                    </NavbarNav>
                    <Button active size="sm" outline color="primary">Coming Soon</Button>
                    </Collapse>
                </Navbar>
        );
    }
    }

export default FixedNavbarExample;