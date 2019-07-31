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
        
        <button onClick={this.buttonMethod}>butaone</button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shirts">Shirts</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
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
