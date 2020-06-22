import React, { Component } from 'react'
import './About.scss'

export class About extends Component {
    render() {
        return (
        /**
         * Work on the image
         * Add a yellow border
         * Text-white
         * add a font-awesome video icon
         * Add functionality to the buttons 
         * Make a testimonial page
         */
            <main className="bg-secondary">
                <article className="container">
                    <div className="row d-flex justify-content-center">
                        {/* Image contaner */}
                        <div className="col-md-6  text-white  card-body bg-secondary">
                            <div className="profile">
                            <img className="card-img-top thumbnail " src=".." alt="LOGOS"/>
                            <h5 className="card-text">I am Mandela </h5>
                            <h5 className="card-text">A coder and A designer</h5>
                            </div>
                            
                        </div>
                        {/* End of image container */}
                         {/* Image contaner */}
                         <div className="col-md-6 text-white card-body">
                             <div className="profile-txt">
                             <h6><small>Profile</small></h6>
                           <h3>Why hire me for your project?</h3>
                           <p classname="lead m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Veritatis obcaecati voluptate sunt nihil quas ratione 
                               nostrum recusandae et magnam cumque atque dolor provident, 
                               unde fuga numquam corporis eius dolorum excepturi.
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Veritatis obcaecati voluptate sunt nihil quas ratione 
                               nostrum recusandae et magnam cumque atque dolor provident, 
                               unde fuga numquam corporis eius dolorum excepturi.
                               
                            </p>
                            <button className="btn btn-lg btn-warning m-3 text-white">Project Video</button>
                            <button className="btn btn-lg btn-warning m-3 text-white">Testimonials </button>
                             </div>
                           
                        </div>
                        {/* End of image container */}
                    </div>
                    
                </article>
                
            </main>
        )
    }
}

export default About
