import React, { Component } from 'react'

export class Code extends Component {
    
    
    
    render() {
       let  {title,description}=this.props.project
        return (
            
                <div className="card m-2 bg-dark border-success col-md-3">
                                <img src="image" alt="ll"/>
                                <div className="card-body">
                                    <h3 className="card-header ">{title}</h3>
                                    <p className="card-text">{description}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <a href="#" className="btn btn-outline-dark text-warning" onClick={this.handleClick}>Project</a>
                                    <a href="#" className="btn btn-outline-dark text-warning">Project files</a>
                                </div>
                </div>
            
        )
    }
}

export default Code
