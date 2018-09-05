import React, { Component } from 'react'
import ICValuesMerchant from '../../img/ic-values-merchant.svg';
import ICValuesInnovate from '../../img/ic-values-innovate.svg';
import ICValuesAuthenticate from '../../img/ic-values-authenticity.svg';
import ICValuesExcellent from '../../img/ic-values-excellent.svg';
import Grid from '@material-ui/core/Grid';
import TeamCard from '../cards/teamCards';

class AboutBody extends Component {
    render () {
        return (
            <div>
            <section className="summary">
            <div className="container h-100">
              <div className="row h-100" style={{position: 'relative'}}>
                <div className="col-lg-12 my-auto text-center">
                  <h3>Our Values</h3>
                  <div className="col-lg-6 offset-lg-3">
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mt-5">
                    <div className="media">
                      <div className="media-left">
                        <img src={ICValuesMerchant} className="media-object" alt="Merchant First"/>
                      </div>
                      <div className="media-body px-4">
                        <h4 className="media-heading">Services</h4>
                        <p>Merchant services has been a highly deceptive industry. We aim to be the opposite, with flat pricing, a massive set of value-adds, and excellent customer service.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-5">
                    <div className="media">
                      <div className="media-left">
                        <img src={ICValuesInnovate} className="media-object" alt="Innovate"/>
                      </div>
                      <div className="media-body px-4">
                        <h4 className="media-heading">Innovation</h4>
                        <p>In order to develop a product that the merchant deserves, we need to continuously innovate. We are constantly trying to find ways to make our offering better.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mt-5">
                    <div className="media">
                      <div className="media-left">
                        <img src={ICValuesAuthenticate} className="media-object" alt="Authenticity" style={{width: '64px'}}/>
                      </div>
                      <div className="media-body px-4">
                        <h4 className="media-heading">Authenticity</h4>
                        <p>We are honest and transparent. We make commitments and follow through. We communicate with respect and provide unparalleled service.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-5">
                    <div className="media">
                      <div className="media-left">
                        <img src={ICValuesExcellent} className="media-object" alt="Demand Excellent"/>
                      </div>
                      <div className="media-body px-4">
                        <h4 className="media-heading">Excellence</h4>
                        <p>We are proud of our work. We demand excellence every day from ourselves, as well as from our product.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
          <Grid container spacing={24}>
              <div className="container h-100">
                <div className="row h-100" style={{position: 'relative'}}>
                  <div className="col-lg-12 my-auto text-center">
                    <h3>Meet Our Team</h3>
                    <div className="col-lg-6 offset-lg-3">
                    </div>
                  </div>
                </div>
              </div>
                <TeamCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/image-isaac.png"
                    title="Isaac Medeiros"
                    subtitle="Co-Founder and CEO"
                    description="Born in João Pessoa, Brazil, Isaac has had a knack for entrepreneurship from a young age. As an adult, he is a serial entrepreneur with one purpose in mind: empowering small businesses."
                    hobbies="Scuba diving. Skiing."
                    games="PUBG"
                    alt="isaac medeiros"
                    linkedin="https://www.linkedin.com/in/isaacmedeiros/"
                    twitter="https://twitter.com/cryptoisaac"
                />
                <TeamCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/image-filipp.jpg"
                    title="Filipp Krasovsky"
                    subtitle="Senior Vice President"
                    description="Born in St. Petersburg, Russia, Filipp is extremely gifted in the field of math. He holds a B.S. in Economics from UCLA and single-handedly built the rewards algorithm for Swipe from the ground up."
                    hobbies=" Cooking. Hiking."
                    games="TF2"
                    alt="Filipp Krasovsky"
                    linkedin="https://www.linkedin.com/in/filippkay/"
                    twitter="https://twitter.com/KayFilipp"
                />
                <TeamCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/image-proshonjit.jpg"
                    title="Proshonjit Das"
                    subtitle="Chief Technology Officer"
                    description="Born in Kuala Lumpur, Malaysia, Proshonjit knows a thing or two about IT systems. He comes from a deep background in software engineering and has a talent for management."
                    hobbies="Learning about new technologies."
                    games="Total War"
                    alt="Proshonjit Das"
                    linkedin="https://www.linkedin.com/in/pxdas/"
                    twitter="https://twitter.com/ptxds"
                />
                <TeamCard
                    image="https://s3.amazonaws.com/swipe-webpage-pictures/image-karina.jpg"
                    title="Karina Lopez"
                    subtitle="Director of Communications"
                    description="Born in Los Angeles, CA, Karina has worked in communications for one of the country’s leading digital media organization, PragerU for over a year and is excited to bring her talents to Nouvo."
                    hobbies="SoulCycle. Binge-watching Netflix."
                    games="GTA V"
                    alt="Karina Lopez"
                    linkedin="https://www.linkedin.com/in/karina-l-78905a103/"
                    twitter="https://twitter.com/SenKarinaLopez"
                />
                {/* <AdvisorCard
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
                /> */}
            </Grid>

          <section className="cta">
              <div className="container">
                <div className="row" style={{position: 'relative'}}>
                  <div className="col-sm-12 text-center">
                      <h4 className="mb-4">Ready to drive more customers to your business?</h4>
                      <a className="btn btn-primary">Coming Soon</a>
                  </div>
                </div>
              </div>
          </section>
        </div>
        )
    }
}

export default AboutBody