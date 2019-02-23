import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import WorkoutGroup from './containers/WorkoutGroup'
import Workout from './components/Workout'

class App extends Component {
  state={
    wtf: []
  }

  componentDidMount(){

  }

  render(){
    
    return(
      
      <div id="App">
      <WorkoutGroup />
      <Workout />
      </div>
    )
}
}

export default App