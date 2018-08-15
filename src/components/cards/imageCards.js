import React from 'react'
import Grid from '@material-ui/core/Grid';

const ImageCards = (props) => {
    return (
        <Grid item xs={12} sm={6} className="imagecards">
            <div className="imagecards-image">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="imagecards-body">
                <p className="imagecards-title">
                    {props.title}
                </p>
                <p className="imagecards-subtitle">
                    {props.subtitle}
                </p>
            </div>
        </Grid>
    )
}

export default ImageCards