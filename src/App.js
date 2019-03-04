import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import WorkoutGroup from './containers/WorkoutGroup'
import WorkoutPage from './containers/WorkoutPage'
import MainWorkoutList from './containers/MainWorkoutList';

class App extends Component {
  state={
    session: {},
    workout: {}
  }

  showWorkout = (session) => {
    console.log("I've been clicked!")
    console.log("This is my session:", session)
    this.setState({
      session
    })
  }
  componentDidMount(){
    fetch("http://localhost:3001/api/v1/user_sessions/").then(r=>r.json())
    .then(workout=> {this.setState({
      workout
    })
  console.log("Workout from fetch.", this.state.workout)})}

  render(){
    
    return(
      <Router>
      <div id="App">
      
      <Route exact path="/workouts" render={routerProps=> <MainWorkoutList clickHandler={this.showWorkout} {...routerProps} workout={this.state.workout}/>} />
      
      <Route path="/workouts/:workoutID" render={routerProps=> 
      <WorkoutPage {...routerProps} clickHandler={this.showWorkout} workout={this.state.workout}/>
    }/>
      
      </div>
      
      </Router>
    )
}
}

export default App