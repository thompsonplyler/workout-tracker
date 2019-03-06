import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainWorkoutList extends Component {

  completedWorkout(session){
    return <li key={session.id} className="completedWorkout" onClick={()=> this.props.clickHandler(session)}>
    <Link to={`${this.props.match.url}/${session.id}`}>{session.session.name}</Link><br /><br /></li>
  }

  incompleteWorkout(session){
    return <li key={session.id} onClick={()=> this.props.clickHandler(session)}>
    <Link to={`${this.props.match.url}/${session.id}`}>{session.session.name}</Link><br /><br /></li>
  }

  render()
      {
        console.log(this.props.match)
      let {workout} = this.props
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


