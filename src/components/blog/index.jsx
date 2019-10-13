import React, { Component } from "react";
import Button from "../buttons";

export default class BlogComponent extends Component {
  render() {
    return (
      <>
        <section className="bg-white  body-wrapper">
          <div className="col-sm-3 pt-4">
            <h2 className="feature-title text-center">Latest Post</h2>
            <div className="featured-dashed">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <img src="./assets/svg/blog/cyber.svg" width="100%" alt="" />
              <strong className="">Cyber security and Mobility</strong>
              <p>
                What is cyber security? Cyber security is the practice of
                protecting systems, .......
              </p>
            </div>
            <div className="col-sm-4">
              <img src="./assets/svg/blog/cognitive.svg" width="100%" alt="" />
              <strong>Cognitive Microservices</strong>
              <p>
                Josla is Lagos-based technology company whose core capabilities
                lie in digital .....
              </p>
            </div>
            <div className="col-sm-4">
              <img src="./assets/svg/blog/kira.svg" width="100%" alt="" />
              <strong>Introducing our new product - KIRA</strong>
              <p>
                The world is changing and its only right to change with it.
                People and businesses......
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button
              value="See More"
              type="success"
              modifier="text-light  slide-btn mt-4"
            />
          </div>
        </section>
      </>
    );
  }
}
