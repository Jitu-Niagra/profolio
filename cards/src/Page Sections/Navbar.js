 import React from 'react'
 import {Link} from 'react-router-dom'
 import './Navbar.scss'

 const Navbar=()=>{
     return(
         <nav className="navbar navbar-dark navbar-expand-md bg-dark">
           <Link className="text-white  logo">N<small>J</small></Link>  
           <button className="navbar-toggler" data-toggle="collapse" data-target="#navResponsive">
               <span className="navbar-toggler-icon " style={{color:"white"}}></span>
           </button>
           <div className="navbar-collapse collapse" id="navResposive">
               <ul className="navbar-nav m-auto">
                   <li className="nav-item">
                       <Link className="nav-link text-warning " to="/home">Home</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link text-warning " to="/about">Profile</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link text-warning "to="/skills">Skills</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link text-warning " to="/project">Projects</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link text-warning " to="/team">My Team</Link>
                   </li>
               </ul>
           </div>
         </nav>
     )
 }
  export default Navbar