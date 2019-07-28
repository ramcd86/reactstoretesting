import React, { Component } from 'react';
import db from './db';
import './App.css';
import './styles/index.scss';
import 'font-awesome/css/font-awesome.min.css';

import NavbarComponent from './components/navbar';
import JumbotronComponent from './components/jumbotron';


class App extends Component {

  constructor() {
    super();
    this.state = {
      db: db,
      order: {},
      initState: 'Null',
      inputReturn: 'No input returned',
      updateCounter: 0
    }

    this.childHandler = this.childHandler.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }

  componentDidMount() {
    console.log(this.state.db)
  }

  componentDidUpdate() {
  }

  shouldComponentUpdate() {
  }

  stateUpdater = () => {
    this.setState({
      updateCounter: (this.state.updateCounter + 1)
    })
  }

  buttonMethod = () => {
    this.setState({
      initState: 'Not null'
    })
  }

  childHandler = (bubbledData) => {
    this.setState({
      initState: bubbledData
    })
  }

  formHandler = (incomingFormData) => {
    this.setState({
      inputReturn: incomingFormData
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <NavbarComponent/>
        <JumbotronComponent/>
      </div>
    )
  }
}

export default App;
