import React, { Component } from 'react'
import './home..scss'
import { infoConsumer } from '../context'


export class Home extends Component {
    // Buttons to function 
    // Linear-gradient on code
    // Background image

    render() {
        const code="<code/>"
        return (
            <header className="bg-primary ">
                <div className="container text-danger">
                    <div className="row">
                        {/* Start of col */}
                        <div className="col-md-6 mt-5 card-body text-center">
                           <h1 className="display-2 text-center mt-5 text-white">Design</h1> 
                           <button className="btn btn-lg btn-outline-warning mt-5 text-white" >View Projects</button>
                        </div>
                        {/* End of col */}
                       {/* Start of col */}
                       <div 
                       className="col-md-6 card-body code mt-5 text-center">
                           <h1 className="display-2 text-center mt-5 text-white "> {code}</h1> 
                           <button className="btn btn-lg btn-outline-warning mt-5 text-white">View Projects</button>
                        </div>
                        {/* End of col */}
                    </div>
                </div>
            </header>
        )
    }
}

export default Home
