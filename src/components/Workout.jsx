import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import day1 from '../foundationA'
import Exercise from '../components/Exercise'

class Workout extends Component {
  
  render(){
      const {workout} = this.props
      console.log("Am I real?", workout.session_workouts)
      const workoutList =(workout.session_workouts) ?  workout.session_workouts.workouts.map(component => {
      const bug = component.exercises.map(exercise => <Exercise exercise={exercise}/>)
      return <div><h3>{component.component}</h3>
      <div>{bug}</div></div>
      }) 
      : "Poop"; 
    return <div className="WorkoutDisplay">{workoutList}</div>
  }
}
export default Workout