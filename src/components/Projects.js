import React, { Component } from 'react'
import Project from './Project';
import {ProjectConsumer} from '../context';
export default class Projects extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <ProjectConsumer>
                            {(value) => {
                                return value.projects.map(project => {
                                    return <Project key={project.id} project={project}/>
                                })
                            }}
                        </ProjectConsumer>
                    </div>

                </div>
        )
    }
}
