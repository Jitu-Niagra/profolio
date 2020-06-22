import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark container-fluid mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 text-warning ">
                    <h4>Niagra Jigi</h4>
                    <address className="">
                        {/* whatsapp icon */}
                        <p>Graphics,Code and Analysis</p>
                        <p><a href="#" className="text-warning">www.nj.netlify.com</a></p>
                        <p>0712345689</p>
                        <p>niagra4@gmail.com</p>

                    </address>
                </div>
                <div className="col-md-4">
                <h4 className="text-warning">Get in-touch with us</h4>
                    <div className="text-warning d-flex justify-content-center">  
                    <p className="m-auto">whatsapp</p>
                    <p className="m-auto">instagram</p>
                    <p className="m-auto">linkedin</p>
                    <p className="m-auto">github</p>
                    </div>
                   
                </div>
                <div className="col-md-5  bg-warning">
                    <h5 className="text-center">Subscribe to our monthly magazine</h5>
                  <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                      <input className="form-control mr-sm-2 text-center" type="email" placeholder="Email"/>
                      <button className="btn btn-outline-dark my-3 btn-md " type="submit">
                          Subscribe
                      </button>

                  </form>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer
