import React, { Component } from 'react'
import JumboAppImage from '../../img/swipe-app-mockup-home.png';

class JumbotronHome extends Component {
    render () {
        return (
            <header class="masthead">
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-sm-5 my-auto order-md-last order-lg-last">
                  <div class="device-container">
                    <div class="device-mockup portrait white">
                      <div class="device">
                        <div class="screen">
                          <div class="card-bg card-bg-right"></div>
                          <img src={JumboAppImage} class="img-fluid" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-7 my-auto order-md-first order-lg-first">
                  <div class="header-content">
                    <h1 class="mb-3">Swipe to Save</h1>
                    <p class="mb-5 subtext">
                      Swipe is the best way to receive real cash for shopping at and being loyal to local businesses. Just add your card and start
                      swiping away to automatically receive up to 100% cashback.
                    </p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscriptionForm">
                      Get Early Access
                    </button>
                    <div class="modal fade" id="subscriptionForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                            <div class="modal-body">
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfhkkl47WQ3peJnK4C3-lz8TW0Vsgae9tNrUxglqMIWgOyq4Q/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default JumbotronHome