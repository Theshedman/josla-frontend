import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default class HeaderComponent extends Component {
  render() {
    return (
        <>
          <nav className="body-wrapper navbar navbar-expand-lg navbar-light bg-transparent">
            <Link className="navbar-brand" to="#">
              <img src="./assets/svg/logo.svg" width="180px" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  show" id="navbarText">
              <ul className="navbar-nav mr-auto pull-right"></ul>
              <div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/product" className="nav-link">
                      Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/career" className="nav-link">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    );
  }
}
