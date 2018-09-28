import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class ContactBody extends Component {
    render () {
        return (
            <div id="" className="container contactus">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 contactdesc">
                    <p>We are here to help. If you have a question about one of our products or our service, we invite you to contact us.</p>
                    <p><strong>Our Support team is available Monday to Friday, 9 AM to 9 PM Pacific Time.</strong></p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                    <div className="col-md-4 subsection">
                        <div className="contacticon"><i className="fa fa-info" aria-hidden="true"></i></div>
                        <h6><Link to="/faqs">Support Center</Link></h6>
                        <h6><Link to="/faqs">Quickly view and search our frequently asked questions.</Link></h6>
                    </div>
                    
                    <div className="col-md-4 subsection">
                        <div className="contacticon"><i className="fa fa-ticket" aria-hidden="true"></i></div>
                        <h6><Link to="/faqs">Submit a ticket</Link></h6>
                        <h6><Link to="/faqs">Send a support ticket with your inquiry.</Link></h6>
                    </div>
                    <div className="col-md-4 subsection">
                        <div className="contacticon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <h6>Mailing address</h6>
                        <h6>1433 N Harper Ave, West Hollywood CA 90046</h6>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactBody