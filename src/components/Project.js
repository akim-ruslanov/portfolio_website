import React, { Component } from "react";
export default class Project extends Component {
  render() {
    const { id, title, img, lang, git, demo } = this.props.project;
    
    function render_demo_link(demo_link) {
      return (
        <a href={demo_link} className="btn btn-success mr-3 mt-3">
              Try!
            </a>
      )
    }
    return (
      <div className="col-9 col-md-6 col-lg-3 my-3 d-flex align-items-stretch">
        <div className="card">
          <div className="card-image-container">
            <img src={img} className="card-img-top" alt="project" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <strong>Tags: </strong>
              {lang}
            </p>
            <a href={`/details/${id}`} className="btn btn-primary mr-3">
              Details
            </a>
            <a href={git} className="btn btn-primary mr-3">
              GitHub
            </a>
            {demo ? render_demo_link(this.props.project.demo_link) : null}
          </div>
        </div>
      </div>
    );
  }
}
