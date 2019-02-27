import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import WorkoutGroup from './containers/WorkoutGroup'
import Workout from './components/Workout'

class App extends Component {
  state={
    workout: ""
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/user_sessions/").then(r=>r.json())
    .then(workouts=>console.log(workouts))

  }

  render(){
    
    return(
      
      <div id="App">
      <WorkoutGroup workout={this.state.workout}/>
      {/* <Workout /> */}
      </div>
    )
}
}

export default App