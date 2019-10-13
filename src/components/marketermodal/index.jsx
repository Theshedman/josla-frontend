import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { default as Btn } from "../buttons";

export default function MarketerModalComponent(props) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button className="btn-success p-2" onClick={() => setLgShow(true)}>
        Apply Now
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h3 className="text-center">Job Recruitment Form</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-sm-3 pt-4">
            <h5 className="feature-title text-left p-0 m-0">Position</h5>
            <div className="featured-dashed float-left">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>
          <p className="clear-both">
            <strong>Digital Marketer</strong>
          </p>
          <div className="col-sm-3 pt-4">
            <p className="feature-title text-left p-0 m-0">Description</p>
            <div className="featured-dashed float-left">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>
          <p className="clear-both">
            Join our team to help plan and manage marketing campaigns that
            promotes our brand, services and products.
          </p>

          <div className="col-sm-3 pt-4">
            <p className="feature-title text-left p-0 m-0">Responsibilities</p>
            <div className="featured-dashed float-left">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>
          <p className="clear-both">
            <p className="mb-2">In this role, you will be responsible for:</p>

            <ul>
              <li>
                Realigning the company’s brand accross various digital channel.
              </li>
              <li>
                Implementing content and messaging strategy for lead generation
                on products and services.
              </li>
              <li>
                Hosting company and attend other events required to drive
                visibility.
              </li>
            </ul>
          </p>

          <div className="col-sm-3 pt-4">
            <p className="feature-title text-left p-0 m-0">Qualification</p>
            <div className="featured-dashed float-left">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>
          <p className="clear-both">
            <ul>
              <li>
                At least a 2:1 (second class upper division) undergraduate
                degree from a respectable university.
              </li>
              <li>
                At least two (2) years work experience or a postgraduate degree
                in software development work.
              </li>
            </ul>
          </p>

          <div className="mb-4 row">
            <label htmlFor="fullName" className="text-right col-sm-3">
              Full Name *
            </label>
            <input id="fullName" name="fullName" type="text" className="form-control col-sm-8" />
          </div>

          <div className="mb-4 row">
            <label htmlFor="email" className="text-right col-sm-3">
              Email *
            </label>
            <input name="email" id="email" type="email" className="form-control col-sm-8" />
          </div>

          <div className="mb-4 row">
            <label htmlFor="phone" className="text-right col-sm-3">
              Phone Number *
            </label>
            <input name="phone" id="phone" type="number" className="form-control col-sm-8" />
          </div>

          <div className="mb-4 row">
            <label htmlFor="position" className="text-right col-sm-3">
              Position *
            </label>
            <input name="position" id="position" type="text" className="form-control col-sm-8" />
          </div>

          <div className="mb-4 row">
            <label htmlFor="coverLetter" className="text-right col-sm-3">
            Cover letter *
            </label>
            <textarea name="coverLetter" id="coverLetter" type="text" rows="15" className="form-control col-sm-8">
              {" "}
            </textarea>
          </div>

          <div className="mb-4 row">
            <label htmlFor="cv" className="text-right col-sm-3">
              Resume *
            </label>
            <input name="cv" id="cv" encType="multipart/form-data" type="file" className="form-control col-sm-8" />
          </div>
          <div className="text-center">
            <Btn type="success" value="Submit" modifier="pr-3 pl-3" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
