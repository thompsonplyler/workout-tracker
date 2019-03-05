import React, { Component } from 'react';

class Exercise extends Component {
  state={
    input: ""
  }

  componentDidMount(){
    if(this.props.exercise.user_session_workout_exercise){
      this.setState({
        input: this.props.exercise.user_session_workout_exercise.input
      })
    }
  }

  setInput = (value, s_workout, u_session, w_exercise, uswe) => {
    this.setState({
      input: value.target.value
    })
    if (uswe) {
      fetch(`http://localhost:3001/api/v1/user_session_workout_exercises/${uswe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
    body: JSON.stringify({user_session_workout_exercise:{
      input: value.target.value }
    })}
      )
    }
    else {
      fetch(`http://localhost:3001/api/v1/user_session_workout_exercises/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    body: JSON.stringify({
      user_session_workout_exercise:
      {input: value.target.value,
      session_workout_id: s_workout,
      user_session_id: u_session,
      workout_exercise_id: w_exercise}
    }
    )}
      )
    }
    
  }

  // look up debouncing for input fields

  showReps = (reps, category, bi, s_workout, u_session, w_exercise, uswe)=>{
    switch(category){
      case "rep_null":
      return this.catRepNull(reps, bi);
      break;
      case "rep_weight":
      return this.catRepWeight(reps, bi, s_workout, u_session, w_exercise, uswe);
      break;
      case "duration": 
      return this.catDuration(reps, bi);
      break;
      case "speed":
      return this.catSpeed(reps, bi, s_workout, u_session, w_exercise, uswe);
      break
      default:
      return this.catRepNull(reps, bi) 
      break;
    }
  } 

  catDuration(reps,bi){
    return `${reps}s ${bi?'each side':null}`
  }

  catRepNull(reps,bi){
    return `${reps} reps ${bi?'each side':null}`
  }

  catRepWeight(reps,bi, s_workout, u_session, w_exercise, uswe){
    return <span>{reps} reps {bi?'each side':null} <input type="text" onChange={(event)=> this.setInput(event, s_workout, u_session, w_exercise, uswe)} value={this.state.input}/></span> 
  }

  catSpeed(reps,bi, s_workout, u_session, w_exercise, uswe){
    if (Math.floor(reps/60) < 1){

      return `${reps%60}s ${bi?'each side':null}`
    }
    else {
      return `${Math.floor(reps/60)}m ${reps%60}s ${bi?'each side':null}`
    }
  }

  showExercise = () => {
  }

  render(){
    const {exercise, s_workout, u_session} = this.props

    return <div onClick={this.showExercise}>
    <div>{exercise.name}</div>
    <div>{exercise.sets} x {this.showReps(exercise.reps, exercise.category, exercise.bi, s_workout, u_session, exercise.workout_exercise_id,exercise.user_session_workout_exercise)}</div>
    <br />
    </div>
  }
}

export default Exercise;


