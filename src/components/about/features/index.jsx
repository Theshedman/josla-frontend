import React, { Component } from "react";

export default class FeaturesComponent extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <div className="body-wrapper">
          <div className="row about-features text-center">
            <div className="col-sm-4">
              <img src="./assets/svg/about-digital.svg" alt="" />
              <h3> Digital Innovation </h3>
              <p className="p-4 pt-2">
                Transform traditional business models & processes with digital
                technologies.
              </p>
            </div>
            <div className="col-sm-4">
              <img src="./assets/svg/cloud.svg" alt="" />
              <h3> Cloud Computing </h3>
              <p className="p-4 pt-2">
                Leverage cost effective computing power and other IT resources
                via the internet.
              </p>
            </div>
            <div className="col-sm-4">
              <img src="./assets/svg/service.svg" alt="" />
              <h3> Service Engineering </h3>
              <p className="p-4 pt-2">
                Apply first principle of engineering to build concept into
                tangible value propositions.
              </p>
            </div>
          </div>

          <div className="body-wrapper featured mb-5">
            <h3 className="feature-titled">Core Value</h3>
            <div className="featured-dashed">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <h4>Commitment</h4>
              <p>
                We show daily commitment as individual to achieve our collective
                goals.
              </p>
            </div>
            <div className="col-sm-3">
              <h4>Smart Work</h4>
              <p>
                We work smart using agile and lean methodologies to create
                continous value.
              </p>
            </div>
            <div className="col-sm-3">
              <h4>Keep It SImple</h4>
              <p>
                We employ design principle across every business facet to build
                simple solutions to everyday problems.
              </p>
            </div>
            <div className="col-sm-3">
              <h4>Social Responsibility</h4>
              <p>
                We believe that it is up to us to deliver the type of
                environment the next generation Nigerians can prosper.
              </p>
            </div>
          </div>

          <div className="body-wrapper featured mb-5">
            <h3 className="feature-titled">Our Team</h3>
            <div className="featured-dashed">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>

          <center>
            <div className="row text-center">
              <div className="col-sm-2">
                <img src="./assets/svg/team/akinlabi.svg" alt="" />
                <h4>Akinlabi Ajelabi</h4>
                <p>CEO/Data Scientist</p>
              </div>
              <div className="col-sm-2">
                <img src="./assets/svg/team/babatunde.svg" alt="" />
                <h4>Babatunde Adeniyi</h4>
                <p>COO/Innovation Lead</p>
              </div>
              <div className="col-sm-2">
                <img src="./assets/svg/team/ayodeji.svg" alt="" />
                <h4>Ayodeji Ilesanmi</h4>
                <p>Service Designer</p>
              </div>
              <div className="col-sm-2">
                <img src="./assets/svg/team/avatar.svg" alt="" />
                <h4>Firstname Lastname</h4>
                <p>Frontend Designer</p>
              </div>
              <div className="col-sm-2">
                <img src="./assets/svg/team/avatar.svg" alt="" />
                <h4>Firstname Lastname</h4>
                <p>Frontend Designer</p>
              </div>
            </div>
          </center>
        </div>
      </>
    );
  }
}
