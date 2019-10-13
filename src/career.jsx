import React from "react";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import CareerResumeModalComponent from "./components/careermodal";
import ApplyModalComponent from "./components/applymodal";
import MarketerModalComponent from "./components/marketermodal";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";

function Career() {
  return (
    <Router>
      <>
        <section className="main-body">
          <div className="header-slide career">
            <HeaderComponent />

            <div className="page-title body-wrapper text-center">
              <h1 className="mb-5">Career</h1>
            </div>
          </div>
          <section className="bg-white">
            <div className="body-wrapper featured">
              <p className="p-5 text-center career-line">
                Awesome!
                <br />
                Welcome to our career page. Are you ready to join our team
                create the future?
              </p>
              <div className="mb-4 pt-4">
                <h2 className="feature-title text-center">Life At Josla</h2>
                <div className="featured-dashed">
                  <span className="dashed dashed-danger"></span>
                  <span className="dashed dashed-success"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <img src="./assets/svg/blog/draft.svg" width="100%" alt="" />
                </div>
                <div className="col-sm-8">
                  <p className="text-justify">
                    At Josla, we combine our love for computing, enthusiasm for
                    technology and interest in relationship development, to
                    create an environment that can foster the growth of local
                    talents in software and hardware engineering.
                    <br />
                    <br />
                    Join Josla today and together we can create tomorrow and the
                    future.
                  </p>
                </div>
              </div>
              <div className="mb-4 pt-4">
                <h2 className="feature-title text-center">Job Opening</h2>
                <div className="featured-dashed">
                  <span className="dashed dashed-danger"></span>
                  <span className="dashed dashed-success"></span>
                </div>
              </div>{" "}
              <section>
                <div className="jumbotron bg-brown mb-2">
                  <h3>Digital Marketer</h3>
                  <p>
                    Are you social media savvy? Are you creative, enthusiastic
                    and data-driven? Then this is the team for you. Join Josla
                    and help take the future to the people.
                  </p>
                  <p className="lead float-right">
                    <Link className=" btn-lg" to="#" role="button">
                      <MarketerModalComponent />
                      {/* <Button type="success" value="Apply Now" modifier="p-2" /> */}
                    </Link>
                  </p>
                </div>

                <div className="jumbotron bg-brown mb-2">
                  <h3>Backend Software Engineer</h3>
                  <p>
                    Interested in building softwares that can change the future
                    for the best? At Josla, you will be joining a team of young
                    professionals to build tomorrow and the future.
                  </p>
                  <p className="lead float-right">
                    <Link className=" btn-lg" to="#" role="button">
                      <ApplyModalComponent />
                      {/* <Button type="success" value="Apply Now" modifier="p-2" /> */}
                    </Link>
                  </p>
                </div>

                <p className="text-center mt-5">
                  At Josla, we love extraordinary talents. If you think
                </p>
                <p className="text-center">
                  you are one that can help change the future, fantastic lets
                  have your details.
                </p>
                <div className="text-center">
                  <CareerResumeModalComponent />
                </div>
              </section>
            </div>

            <FooterComponent />
          </section>
        </section>
      </>
    </Router>
  );
}

export default Career;
