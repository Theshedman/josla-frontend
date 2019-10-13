import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { default as Btn } from "../buttons";

export default function CareerResumeModalComponent(props) {
  const [lgShow, setLgShow] = useState(false);

  const onSubmitData = e => {
    console.log('OnSubmitform:', "You call me?")
    // for (var i = 0; i < formEl.length; ++i) {
    //   formData.append(formEl[i].name, formEl[i].value);
    // }

    // // This is for the purpose of this demo using jsFiddle AJAX Request endpoint
    // formData.append("json", JSON.stringify({ example: "return value" }));

    // // 2. Make the request
    // // ================================
    // var url = "/echo/json/";
    // var fetchOptions = {
    //   method: "POST",
    //   headers,
    //   body: formData
    // };

    // var responsePromise = fetch(url, fetchOptions);

    // // 3. Use the response
    // // ================================
    // responsePromise
    //   // 3.1 Convert the response into JSON-JS object.
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   // 3.2 Do something with the JSON data
    //   .then(function(jsonData) {
    //     console.log(jsonData);
    //     document.getElementById("results").innerText = JSON.stringify(jsonData);
    //   });

    e.preventDefault();

    setLgShow(true);
  };

  return (
    <>
      <Button className="btn-success p-2" onClick={() => setLgShow(true)}>
        Upload Resume
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h3 className="text-center">Upload Resume</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="portfolio">Portfolio Link</label>
            <input name="portfolio" id="portfolio" className="form-control" />
          </div>

          <div className="mb-4">
            <label htmlFor="cv">Upload CV</label>
            <input
              name="cv"
              id="cv"
              type="file"
              className="form-control bordered"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="aboutYou">About you</label>
            <textarea
              name="aboutYou"
              id="aboutYou"
              className="form-control"
              width="100%"
              rows="15"
            ></textarea>
          </div>
          <div className="text-center">
            <Btn onClick={onSubmitData} type="success" value="Send" modifier="btn-noround pr-3 pl-3" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
