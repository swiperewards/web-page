import React from 'react';
import Grid from '@material-ui/core/Grid';

const JumboAbout = () => {
    return (

        <div >
        <Grid container spacing={24}>
            <Grid item xs={12} sm={6} className="about-jumbo-image">
            
            </Grid>
            <Grid item xs={12} sm={6} className="about-jumbo-text">
                <p>Our mission is simple - we aim to empower the small business with unrivaled analytics, retention, and processing, and processing. And we do it all for free.</p>
                <br/>
                <h6>Interested in what we can offer? Contact us.</h6>
            </Grid>
        </Grid>
      </div>    
    )
}


export default JumboAbout;