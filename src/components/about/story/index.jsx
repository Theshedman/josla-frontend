import React, { Component } from "react";

export default class StoryComponent extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <div className="body-wrapper">
          <div className="row">
            <div className="col-sm-4">
              <img src="./assets/svg/story.svg" alt=""/>
            </div>
            <div className="col-8">
              <p className="text-justify pt-5">
                Josla Electric Company Ltd., Josla is a Lagos-based technology
                company established in 2015. The company was founded by Akinlabi
                Ajelabi in pursuit of his entrepreneurial dream to leverage
                modern day technology that create optimal service experiences
                for the average Nigerian. Over the last four years of
                operations, we have built business competency in areas of
                innovation management, data science, software development and
                internet of- thing (IoT) engineering. This is reflected in the
                number of innovative projects we have embarked. Our delivery
                approach is through collaboration with notable established
                organisations as well as the core development of digital
                products that has the potentials to impact service offerings of
                key industries within the Nigerian business environment.
              </p>
            </div>
          </div>
          <div className="vision mt-5">
            <h3 className="vision-title">Our Vision</h3>

            <p className="text-center">
              Our vision is to be at the intersection of digital innovation,
              cloud computing 
              <br/>
              and service engineering to deliver optimal
              customer service experiences.
            </p>
          </div>
        </div>
      </>
    );
  }
}
