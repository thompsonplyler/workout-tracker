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
    console.log("PrevProps",prevProps,"\n","Props", this.props)
    if (!prevProps.initial_session.id && !prevProps.workout.length && this.props.workout.length) 
{    this.props.paramsWorkout(parseInt(this.props.match.params.workoutID))}
  }

  loadWorkout(){
    let workout = this.props.workout.filter(workout => workout.id === this.props.match.params.workoutID)
    console.log(workout)
    return workout
  }

  showWorkoutPage = (thing) => {
    this.setState({
        session: thing.session_workouts.workouts,
        u_session: thing.id
    })
  }
  render(){
    console.log("WorkoutPage props", this.props)
    
    return <div className="WorkoutContainer">
        <WorkoutDetail workout={this.props.initial_session} u_session={this.state.u_session}/>
        <WorkoutGroup clickHandler={this.showWorkout} workout={this.props.workout} url_id={this.props.match.params.workoutID} match={this.props.match} u_session={this.state.u_session}/>


    </div>
    }
}

export default WorkoutPage;