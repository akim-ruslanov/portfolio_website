import React, { Component } from 'react'
const PhotoContext = React.createContext();
var fs = require('fs');

class PhotosProvider extends Component {
    state = {
        photos: [],
        detailProject: null,   
    }

    componentDidMount() {
        this.setPhotos();
    }

    setPhotos = ()=> {
        fetch('/photos.txt')
    .then((r) => r.text())
    .then(text  => {
      this.setState({
          photos: JSON.parse(text)
          
      }, ()=>console.log(this.state))
    })  
    }

    handleDetail = (id)=> {

    }
    
    
    
    
    render() {
        return (
            <PhotoContext.Provider value = {{
                ...this.state,
                handleDetail:this.handleDetail,
            }}>
                {this.props.children}
            </PhotoContext.Provider>
        )
    }
}

const PhotosConsumer = PhotoContext.Consumer;
export {PhotosProvider, PhotosConsumer}

