import React, { Component } from "react";
export default class Project extends Component {
  render() {
    const { id, title, img, lang, git } = this.props.project;
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
            <a href={git} className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}