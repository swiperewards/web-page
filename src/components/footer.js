import React from 'react'
import {Fa} from 'mdbreact'
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <div className="container-fluid footer-container">
            <div className="row">
                <Grid item xs={6}>
                        <img src="https://s3.amazonaws.com/swipe-webpage-pictures/swipe-logo-final-white.png" className="img-fluid" alt="swipe logo" width="70px"/>
                        <br/>
                        <Grid item xs={3} class="footer-icon"><Fa icon="facebook"/></Grid>
                        <Grid item xs={3} class="footer-icon"> <Fa icon="twitter"/></Grid>
                        <Grid item xs={3} class="footer-icon"><Fa icon="youtube"/></Grid>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </div>
        </div>
    )
}

export default Footer