import React from 'react'
import Grid from '@material-ui/core/Grid';
import CardMerchantImage from '../img/ic-values-merchant.svg';


const AboutUsBody = (props) => {
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={12} className="about-body-title">
                    <p>Our Values</p>
                </Grid>
                <Grid item xs={12} sm={6} className="card-about-body">
                
                </Grid>
                <Grid item xs={12} sm={6} className="card-about-body">
                    
                </Grid>
            </Grid>
        </div>
    )
}


export default AboutUsBody