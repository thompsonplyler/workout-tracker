import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainWorkoutList extends Component {

  completedWorkout(session){
    return <li key={session.id} className="completedWorkout" onClick={()=> this.props.clickHandler(session)}>
    <Link to={`${this.props.match.url}/${session.id}`}>{session.session.name} - COMPLETE!</Link><br /><br /></li>
  }

  incompleteWorkout(session){
    return <li className="incompleteWorkout" key={session.id} onClick={()=> this.props.clickHandler(session)}>
    <Link to={`${this.props.match.url}/${session.id}`}>{session.session.name}</Link><br /><br /></li>
  }

  render()
      {
    
      let {workout} = this.props
      
      if (workout.length > 0){

      let workoutList = workout.map(workout_elem=> {
        if (workout_elem.completed){
          // console.log(workout_elem)
          console.log(`Workout ${workout_elem.session.name} Completed `)
          return this.completedWorkout(workout_elem)
        }
        else{
          return this.incompleteWorkout(workout_elem)
        }

    })

    return <div className="workoutList"><ul>{workoutList}</ul></div>}
    else{
      return <div>Please wait.</div>
    }

  }
}

export default MainWorkoutList;


