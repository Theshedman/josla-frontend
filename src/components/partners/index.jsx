import React, { Component } from "react";

export default class PartnersComponent extends Component {
  render() {
    return (
      <>
        <section className="bg-white">
          <div className="body-wrapper">
            <h1 className="feature-titled">Key Partners and Customers</h1>
            <div className="featured-dashed">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>

          <p className="featured-content text-center">
            Not to brag, but we ve had the pleasure to work and partner with
            some amazing companies.
          </p>
          <br/>
          <br/>
          <br/>
          <div className="row body-wrapper text-center">
            <div className="col-sm-4"><img src="./assets/svg/firstpartner.svg" alt="" /></div>
            <div className="col-sm-4"><img src="./assets/svg/ibm.svg" alt="" /></div>
            <div className="col-sm-4">
              <img className="mt-4" src="./assets/svg/innova.svg" alt="" /></div>
            <div className="col-sm-4"><img src="./assets/svg/etranzact.svg" alt="" /></div>
            <div className="col-sm-4"><img src="./assets/svg/unionbank.svg" alt="" /></div>
            <div className="col-sm-4"><img src="./assets/svg/halogen.svg" alt="" /></div>
          </div>
        </section>
      </>
    );
  }
}
