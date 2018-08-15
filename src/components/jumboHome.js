import React from 'react';
import {Button} from 'mdbreact';
import appstoreLogo from '../img/google-play-badge.svg';
import googleplayLogo from '../img/app-store-badge.svg';

const JumboHome = () => {
    return (
        <div className="container-fluid container-home"> 
            <div className="row">
                <div className="col-md-8 jumbo-home-text">
                    <p className=".col-md-3 subtext jumbo-home-subtext">
                        <h1>Swipe To Save</h1>
                        Swipe is the best way to receive real cash for shopping at and being loyal to local businesses. Just add your card and start
                        swiping away to automatically receive up to 100% cashback.<br/>
                    </p>
                    <div className="jumbo-home-nativestore">
                        <img src={googleplayLogo} width="105px" height="72px" alt="google play icon"/>
                        <img src={appstoreLogo} width="105px" height="72px" alt="apple app store icon"/>
                    </div>
                    <div className="jumbo-home-cta">
                        <Button active size="md" outline color="primary">Coming Soon</Button>
                    </div>
                </div>
                <div className="col-md-4 jumbo-home-img"><img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-app-mockup.png" alt="swipe app"/></div>
            </div>
        </div>
    )
}

export default JumboHome;