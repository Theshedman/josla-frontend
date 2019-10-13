import React, { Component } from "react";
import Button from "../buttons";

export default class GetInTouchComponent extends Component {
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

          <p class="getintouch text-center">
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
            <br/>
            <br/>
            Contact Us on
            <br/>
Phone - +234 (0) 8087488793
<br/>
Email - corporate@josla.com.ng
          </p>
          <br />
          <div className="row body-wrapper"></div>
          <div className="text-center">
            <Button
              type="danger"
              value="Enquire"
              modifier="bordered-danger slide-btn mt-2"
            />
          </div>
        </section>
      </>
    );
  }
}
