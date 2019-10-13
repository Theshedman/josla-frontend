import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {default as Btn } from "../buttons"

export default function HomeModalComponent(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
        <Button className="btn-danger slide-btn mt-2" onClick={() => setLgShow(true)}>Enquire</Button>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h3 className="text-center">Get in Touch</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-4">
              <label htmlFor="fullName">Full Name</label>
              <input name="fullName" id="fullName" type="text" className="form-control"/>
            </div>


            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" className="form-control"/>
            </div>

            <div className="mb-4">
              <label htmlFor="enquiryType">Enquiry Type</label>
              <select name="enquiryType" id="enquiryType" className="form-control">
                <option value="Select type">Select type</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="">Some Few Words</label>
              <textarea className="form-control" name="" id="" width="100%" rows="15"></textarea>
            </div>
            <div className="text-center">
              <Btn
                type="success"
                value="Send"
                modifier="btn-noround pr-3 pl-3"
              />
            </div>
          </Modal.Body>
        </Modal>
    </>
  );
}
