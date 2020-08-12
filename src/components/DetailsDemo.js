import React, { Component } from "react";
import { projects } from "../data";
import styled from "styled-components";
export default class Details extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const {
      match: {
        params: { projectID },
      },
    } = this.props;
    this.getProject(parseInt(projectID)).then((project) => {
      this.setState({
        loading: false,
        project: project,
        id: projectID,
        
      });
    });
  }

  getProject = (id) => {
    return new Promise((resolve, reject) => {
      const project = projects.find((project) => project.id === id);
      if (project !== null && project !== undefined) {
        resolve(project);
      } else {
        reject("unable to find the project");
      }
    });
  };

  renderIndicators = (img) => {
    for (let i = 1; i < img.length; i++) {
      return (
        <li data-target="#carouselExampleIndicators" data-slide-to={i}></li>
      );
    }
  };

  

  finishedLoading = () => {
    const { title, info, img, git, demo } = this.state.project;
    const { id } = this.state;
    function render_demo_link(demo_link) {
        return (
          <a href={demo_link} className="btn btn-success mr-3 mb-3">
                Try!
              </a>
        )
      }
    return (
      <CarouselWrapper>
        <DetailsWrapper className="container text-white">
          <h1 className="display-3">{title}</h1>
        </DetailsWrapper>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {img.map((element) =>
              img.indexOf(element) === 0 ? (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  key="0"
                  className="active"
                ></li>
              ) : (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={img.indexOf(element)}
                  key={img.indexOf(element)}
                ></li>
              )
            )}
          </ol>
          <div className="carousel-inner">
            {img.map((element) =>
              img.indexOf(element) === 0 ? (
                <div className="carousel-item active">
                  <img className="d-block" src={element} alt="First slide" />
                </div>
              ) : (
                <div className="carousel-item">
                  <img className="d-block" src={element} alt="First slide" />
                </div>
              )
            )}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="info-container">
          <p className="text-center text-white">{info}</p>
        </div>
        <div className="d-flex justify-content-center">
          <a href={git} className="btn btn-primary mr-3 mb-3">
            GitHub
          </a>
          {demo ? render_demo_link(this.state.project.demo_link) : null}
        </div>
        <div className="d-flex justify-content-center">
                <a href={(id==='0')? `/details/${projects.length-1}`:`/details/${parseInt(id)-1}`}><i className="fas fa-arrow-left fa-2x mx-3"></i></a>
                {console.log(projects.length)}
                <a href={(id===(projects.length-1).toString()) ? '/details/0' : `/details/${parseInt(id)+1}`}><i className="fas fa-arrow-right fa-2x mx-3"></i></a>
        </div>
      </CarouselWrapper>
    );
  };

  render() {

    return this.state.loading ? <div>loading</div> : this.finishedLoading();
  }
}

const CarouselWrapper = styled.div`
  .carousel-item {
    height: 50vh;
  }

  img {
    height: 40vh;
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    img {
      max-height: 40vh;
      height: auto;
    }

    .carousel-item {
      height: 30vh;
    }
  }

  .info-container {
    width: 70%;
    margin: 0 auto;
  }
`;

const DetailsWrapper = styled.div`
  h1 {
    text-align: center;
  }
  img {
    float: left;
    margin-right: 10px;
  }
  p {
    margin: 0;
    white-space: pre-wrap;
  }
`;
