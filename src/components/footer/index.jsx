import React, { Component } from "react";
import HomeModalComponent from "../homemodal";
import { Link } from "react-router-dom";

export default class FooterComponent extends Component {
  render() {
    return (
      <>
        <section className="bg-white">
          <div className="body-wrapper">
            <h1 className="feature-titled">Get In Touch</h1>
            <div className="featured-dashed">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>

          <p className="getintouch text-center">
            Ready to Innovate, Compute and Engineer?
            <br />
            You can call us or leave a request and we will reply as soon as
            possible. We are always glad to see you in our office from 9am to
            6pm weekdays.
            <br />
            <br />
            The OA & A Partnership, 6th Floor Fortune Tower
            <br />
            27/29, Adeyemo Alakija Str, Victoria Island, Lagos, Nigeria.
            <br />
            <br />
            Contact Us on
            <br />
            Phone - +234 (0) 8087488793
            <br />
            Email - corporate@josla.com.ng
          </p>
          <br />
          <div className="row body-wrapper"></div>
          <div className="text-center">
            <HomeModalComponent />
          </div>
        </section>
        <br />
        <br />
        <footer>
            <div className="body-wrapper">
              <div className="row">
                <div className="col-sm-4">
                  <img src="./assets/svg/logo.svg" width="120px" alt="" />
                  <br />
                  <p className="pt-4 pb-4">
                    At Josla, we combine our love for computing, enthusiasm for
                    technology and interest in relationship development, to
                    create an environment that can foster the growth of local
                    talents in software and hardware engineering.
                  </p>
                  <img src="./assets/svg/ibmfooter.svg" alt="" />
                </div>
                <div className="col-sm-2">
                  <h3 className="p-0 m-0">Quick Links</h3>
                  <ul>
                    <li className="pt-3">
                      <Link to="/product">Product</Link>
                    </li>
                    <li className="pt-3">
                      <Link to="/about">Us</Link>
                    </li>
                    <li className="pt-3">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="pt-3">
                      <Link to="/career">Career</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <h3 className="p-0 m-0">Contact Us</h3>
                  <p className="pt-3">
                    <img src="./assets/svg/location.svg" alt="" />
                    The OA & A Parthnership, 6th Floor Fortune Tower, Adeyemo
                    Alakija Street, Victoria Island, Lagos.
                  </p>
                </div>
              </div>
            </div>
        </footer>
      </>
    );
  }
}
