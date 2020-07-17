import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        const {img} = this.props.photo;
        return (
            // <div className="frame col-9 mx-auto col-md-6 col-lg-3 my-3">
            //     <div>
            //         <img src={img} className="image-fluid my-auto d-block" alt={title}/>
            //     </div>
                
            // </div>
            <li className="photo-li">
                <img src={img} className="photo" alt={img}/>
            </li>
        )
    }
}
