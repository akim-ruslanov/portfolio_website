import React, { Component } from "react";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src="/img/icon.png" alt="logo" width="40" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/akim-r-945a34141/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://akim-ruslanov.github.io/resume_web/">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/akim-ruslanov">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/akimruslanov/?hl=en">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fotos">
                  Photos
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
