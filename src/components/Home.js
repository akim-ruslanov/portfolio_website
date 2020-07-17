import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <div id="intro" className="container">
              <div className = "row h-100">
              <div class="col-md-12 mb-4 align-self-center text-center">
                    <h1 className="text-uppercase text-white" data-wow-delay="0.3s"><strong>Akim Ruslanov</strong></h1>
                    <h5 className="text-capitalize text-white" data-wow-delay="0.4s"><strong>software developer based in vancouver</strong></h5>
                  </div>
              </div>
          </div>
      </React.Fragment>
    );
  }
}

