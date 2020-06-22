import React from 'react';
import logo from './logo.svg';
import './App.css';
// Bootstrap
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// React Router
import {Switch,Route} from 'react-router-dom'
import Navbar from './Page Sections/Navbar';
import Footer from './Page Sections/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/project" component={Projects}/>
        <Route   component={ErrorPage}/>
      </Switch>
      

      <Footer/>
    </div>
  );
}

export default App;
