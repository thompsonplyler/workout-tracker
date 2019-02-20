import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import WorkoutGroup from './containers/WorkoutGroup'
import Workout from './components/Workout'
import week1 from './foundationA'

class App extends Component {
  state={
    wtf: []
  }

  componentDidMount(){

  }

  render(){
    console.log(week1)
    return(
      <div id="App">
      <WorkoutGroup />
      <Workout />
      </div>
    )
}
}

export default App