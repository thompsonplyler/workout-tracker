import React, { Component } from 'react';
import WorkoutGroup from './WorkoutGroup'
import WorkoutDetail from './WorkoutDetail'

class WorkoutPage extends Component {
  state={
    clickedWorkout: [],
    u_session: "",
    initial_click: false
  }

  componentDidMount(){
    // this.props.paramsWorkout(this.props.match.params.workoutID)
  }

  componentDidUpdate(prevProps){
    if (!prevProps.initial_session.id && !prevProps.workout.length && this.props.workout.length) 
{    this.props.paramsWorkout(parseInt(this.props.match.params.workoutID))}
  }

  loadWorkout(){
    let workout = this.props.workout.filter(workout => workout.id === this.props.match.params.workoutID)
    return workout
  }

  showWorkout = (thing) => {
    this.setState({
        session: thing.session_workouts.workouts,
        u_session: thing.id
    })
  }
  render(){
    return <div className="WorkoutContainer">
        <WorkoutDetail workout={this.props.initial_session} u_session={this.props.u_session} completed ={this.props.completed}/>
        <WorkoutGroup clickHandler={this.props.clickHandler} workout={this.props.workout} url_id={this.props.match.params.workoutID} match={this.props.match} u_session={this.state.u_session}/>


    </div>
    }
}

export default WorkoutPage;