import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';


import './App.css';
import './styles/index.scss';
import 'font-awesome/css/font-awesome.min.css';


import ShoesComponent from './pages/shoes';
import ShirtsComponent from './pages/shirts';
import HomeComponent from './pages/home';
import AboutComponent from './pages/about';
import ContactComponent from './pages/contact';


class App extends Component {

  constructor() {
    super();
    this.state = {
      shirts: null,
      shoes: null,
      order: {},
      initState: 'Null',
      inputReturn: 'No input returned',
      updateCounter: 0,
      propsPresent: 'True'
    }

    this.stateMutator = this.stateMutator.bind(this);

    axios.get('http://localhost:3000/shirts').then((resp) => {
      this.stateMutator({actionType: 'SET_SHIRTS', payload: resp.data})
    }).catch((err) => {
      console.log(err)
    })

    axios.get('http://localhost:3000/shoes').then((resp) => {
      this.stateMutator({actionType: 'SET_SHOES', payload: resp.data})
    }).catch((err) => {
      console.log(err)
    })

  }

  componentDidMount() {

  }


  stateMutator = ( action = { actionType: 'DEFAULT', payload: 'NULL' } ) => {
    switch (action.actionType) {
      case 'DEFAULT':
        this.setState({
          initState: action.payload
        })
      break;
      case 'SET_SHIRTS': 
        this.setState({
          shirts: action.payload
        })
      break;
      case 'SET_SHOES': 
        this.setState({
          shoes: action.payload
        })
      break;
      default:
      return null;
    }
    console.log(this.state)
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
          render={ (routerProps) => (<ShirtsComponent {...routerProps} state={this.state} stateMutator={this.stateMutator}  />) }/>

          <Route path="/shoes" 
          render={ (routeProps) => (<ShoesComponent {...routeProps} state={this.state} stateMutator={this.stateMutator}  />) }/>

          <Route path="/contact" 
          render={ (routeProps) => (<ContactComponent {...routeProps} state={this.state} stateMutator={this.stateMutator}  />) }/>

          <Route path="/about" 
          render={ (routeProps) => (<AboutComponent {...routeProps} state={this.state} stateMutator={this.stateMutator}  />) }/>

        </div>
    </Router>
    )
  }
}

export default App;
