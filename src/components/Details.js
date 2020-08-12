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

  finishedLoading = () => {
    const { title, info, img } = this.state.project;
    return (
      <DetailsWrapper className="container text-white">
        <h1 className="display-3">{title}</h1>
          <img src={img} alt={title} style={{ width: "40%", minWidth: "0" }} />
          <p>{info}</p>
      </DetailsWrapper>
    );
  };

  render() {
    console.log(this.state);

    return this.state.loading ? <div>loading</div> : this.finishedLoading();
  }
}

const DetailsWrapper = styled.div`
  h1 {
    text-align: center;
  }
  img {
      float:left;
      margin-right: 10px;

  }
  p {
      margin: 0;
      white-space: pre-wrap
  }

`;
