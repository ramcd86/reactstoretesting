import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import db from './db';
import './App.css';
import './styles/index.scss';
import 'font-awesome/css/font-awesome.min.css';

import NavbarComponent from './components/navbar';
import JumbotronComponent from './components/jumbotron';

import ShoesComponent from './pages/shoes';
import ShirtsComponent from './pages/shirts';
import HomeComponent from './pages/home';
import AboutComponent from './pages/about';
import ContactComponent from './pages/contact';


class App extends Component {

  constructor() {
    super();
    this.state = {
      db: db,
      order: {},
      initState: 'Null',
      inputReturn: 'No input returned',
      updateCounter: 0,
      propsPresent: 'True'
    }

    this.stateMutator = this.stateMutator.bind(this);
  }

  componentDidMount() {
    console.log(this.state.db)
  }


  stateMutator = ( action = { actionType: 'DEFAULT', payload: 'NULL' } ) => {
    switch (action.actionType) {
      case 'DEFAULT':
        this.setState({
          initState: action.payload
        })
      break;
      default:
      return null;
    }
  }

  componentDidUpdate() {
   console.log('I updated.')
  }


  render() {
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <span className="navbar-brand" href="#"><i className="fa fa-dot-circle-o" aria-hidden="true"></i> ICON</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/shirts">Shirts</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/shoes">Shoes</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                  </ul>
              </div>
            </div>
        </nav>
          <Route exact path="/" 
          render={ (routeProps) => (<HomeComponent {...routeProps} state={this.state} stateMutator={this.stateMutator} />) }/>
          
          <Route path="/shirts" 
          render={ (routeProps) => (<ShirtsComponent {...routeProps} state={this.state} />) }/>

          <Route path="/shoes" 
          render={ (routeProps) => (<ShoesComponent {...routeProps} state={this.state} />) }/>

          <Route path="/contact" 
          render={ (routeProps) => (<ContactComponent {...routeProps} state={this.state} />) }/>

          <Route path="/about" 
          render={ (routeProps) => (<AboutComponent {...routeProps} state={this.state} />) }/>

        </div>
    </Router>
    )
  }
}

export default App;
