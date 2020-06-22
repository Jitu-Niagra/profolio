import React, { Component } from 'react'
import Home from './Home'

class ErrorPage extends Component {

    render() {
        return (
            <div className=" container">
                <div className="row">
                    <div className="col">
                        <h4 className="text-danger">Page not found</h4>
                        <a className="btn btn-outline-warning text-warning" onClick={this.errorClick}>Back to Home</a>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage
