import React from 'react';
import Grid from '@material-ui/core/Grid';

const TeamCard = (props) => {
    return (
        <Grid item xs={12}>
            <div className="teamcards-image-body">
                <img src={props.image} alt={props.alt} className="teamcards-image"/>
            </div>
            <div className="teamcards-body">
                <p className="teamcards-title">
                    {props.title}
                </p>
                <p className="teamcards-subtitle">
                    <i>{props.subtitle}</i>
                </p>
                <p className="team-description">
                    {props.description}
                </p>
                <p className="team-hobbies">
                    <b>Hobbies:</b> {props.hobbies}
                </p>
                <p className="team-games">
                    <b>Favorite Game:</b> {props.games}
                </p>
                <div class="social">
                  <a href="#" target="_blank">
                    <i class="fa fa-facebook mr-3"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="fa fa-twitter mr-3"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="fa fa-linkedin mr-3"></i>
                  </a>
                </div>
            </div>
        </Grid>
    )
}

export default TeamCard