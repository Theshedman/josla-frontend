import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/header";
import Button from "./components/buttons";
import FeaturedComponent from "./components/features";
import PartnersComponent from "./components/partners";
import HomeBlogComponent from "./components/homeblog/";
import FooterComponent from "./components/footer";
function HomePage() {
  return (
    <>
      <section className="main-body">
        <div className="header-slide ">
          <HeaderComponent />

          <div className="slide-title body-wrapper">
            <h1>
              We
              <br />
              Innovate
            </h1>
            <Link to="/about">
              <Button
                value="About Us"
                modifier="bordered-danger slide-btn"
                type=""
              />
            </Link>
          </div>
        </div>

        <section className="bg-white">
          <div className="body-wrapper featured">
            <h1 className="feature-titled">What We Offer</h1>
            <div className="featured-dashed">
              <span className="dashed dashed-danger"></span>
              <span className="dashed dashed-success"></span>
            </div>
          </div>

          <p className="featured-content text-center">
            Lorem the here for we lorem the here for we lorem the here for we
            lorem the here for we lorem the here for we lorem
          </p>

          <FeaturedComponent />
          <PartnersComponent />
          <HomeBlogComponent />
          <FooterComponent />
        </section>
      </section>
    </>
  );
}

export default HomePage;
