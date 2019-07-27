import React, { Component } from 'react';
import Modal from "./Modal"

class Exercise extends Component {
  state={
    input: "",
    exists: false,
    exercise: {},
    click: false
  }

  componentDidMount(){
    this.setState({
      exercise: this.props.exercise
    })
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
    console.log(this.state.input)
    console.log(this.props)
    console.log(uswe.input)

    if (uswe) {
    
      console.log(`I say a token exists! Behold: ${uswe.input}`)
      let token = localStorage.getItem("token")
      fetch(`http://localhost:3001/api/v1/user_session_workout_exercises/${uswe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      },
    body: JSON.stringify({user_session_workout_exercise:{
      input: value.target.value }
    })}
      ).then(r=>r.json())
      .then(data=>{
        
        const newExercise = {
          ...this.state.exercise,
          user_session_workout_exercise: data.user_session_workout_exercise
        }

        this.setState({
        exercise: newExercise})
      })
      
    }
    else {
      console.log(`THERE IS NO INPUT!`)
      let token = localStorage.getItem("token")
      fetch(`http://localhost:3001/api/v1/user_session_workout_exercises/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      },
    body: JSON.stringify({
      user_session_workout_exercise:
      {input: value.target.value,
      session_workout_id: s_workout,
      user_session_id: u_session,
      workout_exercise_id: w_exercise}
    }
    )}
      ).then(r=>r.json())
      .then(data=>{

        
        const newExercise = {
          ...this.state.exercise,
          user_session_workout_exercise: data.user_session_workout_exercise
        }

        this.setState({
        exercise: newExercise})
      })
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
    return <span>{reps} reps {bi?'each side':null} <input type="text" name="input" onChange={(event)=> this.setInput(event, s_workout, u_session, w_exercise, uswe)} value={this.state.input}/></span> 
  }

  catSpeed(reps,bi, s_workout, u_session, w_exercise, uswe){
    if (Math.floor(reps/60) < 1){

      return `${reps%60}s`
    }
    else {
      return `${Math.floor(reps/60)}m ${reps%60}s ${bi?'each side':''}`
    }
  }

  showExercise = () => {
    this.setState({clicked: !this.state.clicked})
    console.log(this.state.exercise.name)
  }

 

  render(){

    let {s_workout, u_session} = this.props
    let {exercise, clicked} = this.state

    return <div>
      <div>{clicked ? <Modal clickHandler={this.showExercise} exercise={exercise} />:null}</div>
    <div onClick={this.showExercise}>{exercise.name}</div>
    <div>{exercise.sets} x {this.showReps(exercise.reps, exercise.category, exercise.bi, s_workout, u_session, exercise.workout_exercise_id,exercise.user_session_workout_exercise)}</div>
    <br />
    </div>
  }
}

export default Exercise;


