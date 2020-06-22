import React, { Component } from 'react'
import Code from './Code'
import CodeData from './CodeData'

class Projects extends Component {
    // make a  file api server 
    constructor(props) {
        super(props)
    
        this.state = {
             projects:CodeData
        }
    }
    
    
    render() {
        const projo=this.state.projects.map(project=> <Code key={project.id} project={project}/>)
        return (
            <div className="text-warning">
                <div className="container">
                    <div className="row">
                        <div className="col ">
                        <h1 className="text-center">My Projects</h1>
                        <div className="row d-flex justify-content-between">
                        {projo}
                        </div>

                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
}

export default Projects
