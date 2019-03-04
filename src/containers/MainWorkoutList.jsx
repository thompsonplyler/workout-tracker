import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class MainWorkoutList extends Component {

  clicked =(session)=>{
    console.log(session)

  }

  completedWorkout(session){
    return <li key={session.id} className="completedWorkout" onClick={()=> this.clicked(session)}>
    {session.session.name}<br /><br /></li>
  }

  incompleteWorkout(session){
    return <li key={session.id} onClick={()=> this.clicked(session)}>
    {session.session.name}<br /><br /></li>
  }

  render()

      {
      let {workout} = this.props
      console.log("Workout from Main Workout List.", workout)
      if (workout.length > 0){

      let workoutList = workout.map(workout=> {
        if (workout.completed){
          return this.completedWorkout(workout)
        }
        else{
          return this.incompleteWorkout(workout)
        }

    })

    return <div className=""><ul>{workoutList}</ul></div>}
    else{
      return <div>Please wait.</div>
    }

  }
}

export default MainWorkoutList;


