import React, { Component } from "react";
import { photos } from "../photos";
import Photo from "./Photo";
import {ProjectConsumer} from '../context'
export default class Photos extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row h-100 my-3">
            <div class="col-md-12 mb-4 align-self-center text-center">
              <h5 class="text-capitalize text-white" data-wow-delay="0.4s">
                <strong>some photos that I had a chance to take</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <ul className="photo-ul">
            {photos.map((photo) => {
              return <Photo photo={photo} />;
            })}
          </ul> */}
          <ul className="photo-ul">
            <ProjectConsumer>
              {(value) => {
                return value.photos.map(photo => {
                  return <Photo key = {photo.id} photo = {photo}/>
                });
              }}
            </ProjectConsumer>
          </ul>
        </div>
      </div>
    );
  }
}
