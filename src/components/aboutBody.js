import React from 'react'
import Grid from '@material-ui/core/Grid';
import CardMerchantImage from '../img/ic-values-merchant.svg';
import ImageCards from './cards/imageCards';
import CardInnovateImage from '../img/ic-values-innovate.svg';
import CardAuthenticityImage from '../img/ic-values-authenticity.svg'
import TeamCard from './cards/teamCards';
import AdvisorCard from './cards/advisorCards';
import {Button } from 'mdbreact';



const AboutUsBody = (props) => {
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={12} className="about-body-title">
                    <p>Our Values</p>
                </Grid>
                <ImageCards
                    image={CardMerchantImage}
                    title="Merchant"
                    subtitle="Merchant services has been a highly deceptive industry. We aim to be the opposite, with flat pricing, a massive set of value-adds, and excellent customer service."
                    alt="merchant"
                />
                <ImageCards
                    image={CardInnovateImage}
                    title="Innovation"
                    subtitle="In order to develop a product that the merchant deserves, we need to continuously innovate. We are constantly trying to find ways to make our offering better."
                    alt="innovation"
                />
                <ImageCards
                    image={CardAuthenticityImage}
                    title="Authenticity"
                    subtitle="We are honest and transparent. We make commitments and follow through. We communicate with respect and provide unparalleled service."
                    alt="authenticity"
                />
                <ImageCards
                    image={CardMerchantImage}
                    title="Demand Excellent"
                    subtitle="We are proud of our work. We demand excellence every day from ourselves, as well as from our product."
                    alt="demand excellent"
                />
                <Grid item xs={12} className="about-body-title">
                    <p>The Team</p>
                </Grid>
                <TeamCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/img-isaac.jpg"
                    title="Isaac Medeiros"
                    subtitle="Co-Founder and CEO"
                    description="Born in João Pessoa, Brazil, Isaac has had a knack for entrepreneurship from a young age. As an adult, he is a serial entrepreneur with one purpose in mind: empowering small businesses."
                    hobbies="Scuba diving. Skiing."
                    games="PUBG"
                    alt="isaac medeiros"
                />
                <TeamCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/img-isaac.png"
                    title="Filipp Krasovsky"
                    subtitle="Senior Vice President"
                    description="Born in St. Petersburg, Russia, Filipp is extremely gifted in the field of math. He holds a B.S. in Economics from UCLA and single-handedly built the rewards algorithm for Swipe from the ground up."
                    hobbies=" Cooking. Hiking."
                    games="TF2"
                    alt="Filipp Krasovsky"
                />
                <TeamCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/img-proshonjit.png"
                    title="Proshonjit Das"
                    subtitle="Chief Technology Officer"
                    description="Born in Kuala Lumpur, Malaysia, Proshonjit knows a thing or two about IT systems. He comes from a deep background in software engineering and has a talent for management."
                    hobbies="Learning about new technologies."
                    games="Total War"
                    alt="Proshonjit Das"
                />
                <TeamCard
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeFnmAB6pPubwY8xrUJGknAUq_ig1NLUq5crX3BNSwh3NNwcCWg"
                    title="Karina Lopez"
                    subtitle="Director of Communications"
                    description="Born in Los Angeles, CA, Karina , Karina has had a knack for entrepreneurship from a young age. As an adult, he is a serial entrepreneur with one purpose in mind: empowering small businesses."
                    hobbies="SoulCycle. Binge-watching Netflix. "
                    games="GTAV"
                    alt="Karina Lopez"
                />
                <AdvisorCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/img-ari.jpg"
                    title="Ari Kaplan"
                    subtitle="CFO and Advisor"
                    description="Ari is a skilled manager and considers himself to be an effective leader while remaining industry agnostic. Though a big proponent of efficiency, Ari is passionate about job creation, skills development, and mentorship."
                    alt="Ari Kaplan"
                />
                <AdvisorCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/img-ari.png"
                    title="Penn Arthur"
                    subtitle="Advisor"
                    description="An experienced entrepreneur with over 20 years of experience dealing with large entities like GM, Raytheon, and Boeing."
                    alt="Penn Arthur"
                />
                <Grid item xs={12} className="about-body-banner">
                    <p>Join Us In Making Cashback Cool Again</p>
                    <Button active size="sm" outline color="primary">Coming Soon</Button>
                </Grid>
            </Grid>
        </div>
    )
}


export default AboutUsBody