import React, { Component } from "react";
import "./index.css";
import Button from "../buttons";
export default class FeaturedComponent extends Component {
  render() {
    return (
      <>
        <div className="row body-wrapper">
          <div className="col-sm-6">
            <div className="card text-center no-border">
              <div className="card-body">
                <img src="./assets/svg/datascience.svg" alt="" />
                <h2 className="card-title">Data Science As A Service</h2>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/about" className="">
                  <Button
                    value="Learn More"
                    type="danger"
                    modifier="p-3 featured-btn"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card text-center no-border">
              <div className="card-body">
                <img src="./assets/svg/digitaldevelopment.svg" alt="" />
                <h2 className="card-title">Digital Product Development</h2>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/about">
                  <Button
                    value="Learn More"
                    type="danger"
                    modifier="p-3 featured-btn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="kira body-wrapper p-3">
          <img src="./assets/svg/kira-icon.svg" alt="" />
          <br />
          <br />
          <p>
            Kira is an AI-driven application that helps internet-enabled
            Nigerians with a registered BVN to access financial services such as
            digital wallet, payment transactions, spend analytics and P2P
            lending. Want to know more about our Kira product?
          </p>
          <br />
          <br />

          <p className="text-center">
            <Button value="Get Started" modifier="bordered-danger slide-btn" />
          </p>
        </div>
        <br />
        <div className="row halo body-wrapper p-3">
          <div className="col-sm-7"></div>
          <div className="col-sm-5">
            <img src="./assets/svg/halo-icon.svg" className="float-right" alt="" />
            <br />
            <br />
            <br />
            <br />
            <br />

            <p className="halo-desc">
              HaloTrak is an IoT-based solution that helps internet-enabled
              Nigerians with at least one duly registered vehicle to securely
              manage their mobile assets through locate & track, review of
              operational information and on-demand insurance premiums.
            </p>
            <br />
            <br />

            <p className="text-center">
              <Button
                value="Get Started"
                modifier="bordered-danger slide-btn text-dark"
              />
            </p>
          </div>
        </div>
        <br />
        <div className="pregrid body-wrapper p-3">
          <img src="./assets/svg/pregrid-icon.svg" alt="" />
          <br />
          <br />
          <br />
          <p>
            peGrid helps both public and private distribution utilities to match
            supply and demand of electrical energy in real-time through
            integration of renewable energy systems and disaggregation of
            electricity consumption.
          </p>
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}
