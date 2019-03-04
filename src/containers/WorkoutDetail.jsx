import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Exercise from '../components/Exercise'
class WorkoutDetail extends Component {
  state={
    sessions:[]
  }

  componentDidMount(){

  }

  renderExercise= (exercise) => {
    console.log(exercise)
    return <div>
        <Exercise exercise={exercise}/>
    </div>
  }

  render(){
      console.log(this.props.workout)
      let {workout} = this.props
      if (workout.length > 1){
        let exerciseList = workout.map(workoutItem=>{
            return <div>
                <h3>{workoutItem.component}</h3>
                {workoutItem.exercises.map(exercise=>this.renderExercise(exercise))}
            </div>
        })
        return <div className="WorkoutDisplay"><ul>
        {exerciseList}
    </ul></div>
      }
      else {
          let exerciseList = "poop"
          return <div className="WorkoutDisplay"><ul>
        {exerciseList}
    </ul></div>
        }
}

  //       {let workoutList = this.state.sessions.map(session=> {
//       return  <li onClick={()=> this.props.clickHandler(session)}>
//                 {session.session.name}
//                   <br />
//                   <br />
//               </li>
//     })

//     return <div className="WorkoutList"><ul>{workoutList}</ul></div>
//   }
}

export default WorkoutDetail;