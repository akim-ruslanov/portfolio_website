import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    const { img } = this.props.photo;
    return (
      <li className="photo-li">
        <img src={img} className="photo" alt={img} />
      </li>
    );
  }
}
