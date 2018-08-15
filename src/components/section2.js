import React from 'react'
import {Button} from 'mdbreact';

const Section2 = () => {
    return (
        <div className="container-fluid section2-img">
            <div className="col-md-8">
                <img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-app-mockup_2.png" alt="swipe app"/>
            </div>
            <div className="col-md-8">
                <p className=".col-md-3 sect2-text">
                    <h1>Unlimited Cashback</h1>
                    You make money. 
                    <br/>Your local businesses gain loyal customers. 
                    <br/><strong>Everyone wins.</strong>
                </p>
            </div>
            <div className="sect2-cta">
                <Button active size="md" outline color="primary">Coming Soon</Button>
            </div>
        </div>
    )
}

export default Section2