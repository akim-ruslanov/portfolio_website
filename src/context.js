import React, { Component } from 'react'
import {projects, detailProject} from './data';
const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        projects: [],
        photos: [],
        detailProject: detailProject,   
    }

    componentDidMount() {
        this.setProjects();
        this.setPhotos();
    }

    setProjects = ()=> {
        let tempProjects = [];
        projects.forEach(project => {
            const singleProject = {...project};
            tempProjects = [...tempProjects, singleProject]
        });
        this.setState(() => {
            return {projects: tempProjects};
        });
    }

    setPhotos = ()=> {
        fetch('/photos.txt')
    .then((r) => r.text())
    .then(text  => {
      this.setState({
          photos: JSON.parse(text)
      })
    })  
    }

    getProject = (id)=> {
        return new Promise((resolve, reject)=>{
            const project = this.state.projects.find(project => project.id === id);
            if (project !== null && project !== undefined) {
                resolve(project);
            } else {
                reject('unable to find the project')
            }
        })
    }

    handleDetail = (id)=> {
        const project = this.getProject(id);
        this.setState(()=> {
            return {detailProject: project}
        })
    }
    
    
    
    
    render() {
        return (
            <ProjectContext.Provider value = {{
                ...this.state,
                getProject:this.getProject,
            }}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;
export {ProjectProvider, ProjectConsumer}

