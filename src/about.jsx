import React from "react";
import "./App.css";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import StoryComponent from "./components/about/story";
import FeaturesComponent from "./components/about/features";

function App() {
  return (
    <>
      <section className="main-body">
        <div className="header-slide about">
          <HeaderComponent />

          <div className="slide-title body-wrapper">
            <h1 className="text-center">
              About Us
            </h1>
          </div>
        </div>
        <section className="bg-white">
          <div className="body-wrapper featured">
            <h1 className="feature-titled">Our Story</h1>
            <div className="featured-dashed">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>


          <StoryComponent />
          <FeaturesComponent />

          <FooterComponent />
        </section>
      </section>
    </>
  );
}

export default App;
