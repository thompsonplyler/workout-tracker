import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class Exercise extends Component {
  state={
    wtf: []
  }

  componentDidMount(){

  }

  showReps = (reps, category, bi)=>{
    switch(category){
      case "rep_null":
      return this.catRepNull(reps, bi);
      break;
      case "rep_weight":
      return this.catRepWeight(reps, bi);
      break;
      case "duration": 
      return this.catDuration(reps, bi);
      break;
      case "speed":
      return this.catSpeed(reps, bi);
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

  catRepWeight(reps,bi){
    return <span>{reps} reps {bi?'each side':null} <input /></span> 
  }

  catSpeed(reps,bi){
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
    const {exercise} = this.props

    return <div onClick={this.showExercise}>
    <div>{exercise.name}</div>
    <div>{exercise.sets} x {this.showReps(exercise.reps, exercise.category, exercise.bi)}</div>
    <br />
    </div>
  }
}

export default Exercise;


