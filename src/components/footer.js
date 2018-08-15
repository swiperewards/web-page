import React, {Component}  from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterSection extends Component {
    render(){
        return(
            <Footer color="stylish-color-dark" className="font-small pt-4 mt-4 footer">
                <Container fluid className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Swipe Inc.</h6>
                            <p>We are excited to bring new a new platform that provides our users across different verticals with the ability to earn rewards, make payment and shop without hassle.</p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p><a href="#!">Swipe Rewards</a></p>
                            <p><a href="#!">Flyte</a></p>
                            <p><a href="#!">Rome</a></p>
                            <p><a href="#!">Teapot</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p><a href="#!">About</a></p>
                            <p><a href="#!">Merchant</a></p>
                            <p><a href="#!">Contact Us</a></p>
                            <p><a href="#!">Sign Up</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fa fa-home mr-3"></i> West Hollywood, CA 90046, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> contact@swiperewards.io</p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.swiperewards.io"> Swipe Inc.</a></p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="/" className="btn-floating btn-sm rgba-white-slight mx-1" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="/" className="btn-floating btn-sm rgba-white-slight mx-1" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="/" className="btn-floating btn-sm rgba-white-slight mx-1" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                    <li className="list-inline-item"><a href="/" className="btn-floating btn-sm rgba-white-slight mx-1" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterSection;