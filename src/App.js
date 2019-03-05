import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import WorkoutPage from './containers/WorkoutPage'
import MainWorkoutList from './containers/MainWorkoutList';

class App extends Component {
  state={
    session: [],
    workout: [],
    u_session: ""
  }

paramsWorkout=(id)=>{
  console.log("I'M CHECKING MY ID", id)
  let initial_session = this.state.workout.find(day => day.id===id)
  this.setState({
    session: initial_session.session_workouts.workouts
  })
  console.log("THIS IS SO GIGI CAN SEE ME", initial_session)

}

changeSessionFromPage=()=>{

}



  showWorkout=(session)=>{
    console.log("I've been clicked!")
    console.log("This is my session:", session)
    this.setState({
      session: session.session_workouts.workouts
    },console.log("This is my state.", this.state.session))
  }




  componentDidMount(){
    fetch("http://localhost:3001/api/v1/user_sessions/").then(r=>r.json())
    .then(workout=> {this.setState({
      workout
    })
    // console.log("App props")
  })}





  render(){
    return(
      <Router>
      <div id="App">
      
      <Route exact path="/workouts" render={routerProps=> <MainWorkoutList clickHandler={this.showWorkout} {...routerProps} workout={this.state.workout}/>} />
      
      <Route path="/workouts/:workoutID" render={routerProps=> 
      
      <WorkoutPage {...routerProps} 
      clickHandler={this.showWorkout} 
      workout={this.state.workout}
      initial_session={this.state.session}
      paramsWorkout={this.paramsWorkout}
      u_session={this.state.u_session}
      
      />
    }/>
      
      </div>
      
      </Router>
    )
}
}

export default App