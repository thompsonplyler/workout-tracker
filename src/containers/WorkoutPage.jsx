import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import WorkoutGroup from './WorkoutGroup'
import WorkoutDetail from './WorkoutDetail'

class WorkoutPage extends Component {
  state={
    clickedWorkout: []
  }

  componentDidMount(){

  }

  showWorkout = (thing) => {
      console.log("Hi, I'm a thing!", thing.session_workouts)
      this.setState({
          clickedWorkout: thing.session_workouts.workouts
      })
  }

  render(){
    return <div className="WorkoutContainer">
        <WorkoutDetail workout={this.state.clickedWorkout} />
        <WorkoutGroup clickHandler={this.showWorkout}/>


    </div>
    }
}

export default WorkoutPage;