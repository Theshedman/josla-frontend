import React from "react";
import "./App.css";
import HeaderComponent from "./components/header";
import Button from "./components/buttons";
import FooterComponent from "./components/footer";
import BlogComponent from "./components/blog";

function App() {
  return (
    <>
      <section className="main-body">
        <div className="header-slide blog">
          <HeaderComponent />

          <div className="page-title body-wrapper text-center">
            <h1 className="mb-5">Blog</h1>
            <p>Subscribe for our latest blog post</p>
            <input className="p-2 col-sm-6" />
            <Button
              type="success"
              modifier="col-sm-2 p-2 btn-noround"
              value="Subscribe"
            />
          </div>
        </div>
        <section className="bg-white">
          <div className="body-wrapper featured">
            <div className="col-sm-3 mb-4 pt-4">
              <h2 className="feature-title text-center">Latest Post</h2>
              <div className="featured-dashed">
                <span className="dashed dashed-danger"></span>
                <span className="dashed dashed-success"></span>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <img src="./assets/svg/blog/cyber.svg" width="100%" alt="" />
                <h5>Cyber Security and Mobility</h5>
              </div>
              <div className="col-sm-8">
                <h2>Cyber Security and Mobility</h2>
                <h4 className="mb-3">3rd Nov 2018 by karina</h4>
                <p className="text-justify">
                  What is cyber security? Cyber security is the practice of
                  protecting systems, networks, programs which include hardware,
                  software and data from digital attacks. These attacks are
                  usually aimed at accessing, changing, or destroying sensitive
                  information; or interrupting normal business processes. Why is
                  cyber security important? Innovation is a key driver for
                  competition and more generally… Continue reading
                </p>
              </div>
            </div>
          </div>

          <BlogComponent />
          <FooterComponent />
        </section>
      </section>
    </>
  );
}

export default App;
