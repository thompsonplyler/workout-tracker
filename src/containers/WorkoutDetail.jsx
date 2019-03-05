import React, { Component } from 'react';
import Exercise from '../components/Exercise'
class WorkoutDetail extends Component {
  state={
    sessions:[]
  }

  componentDidMount(){

  }

  renderExercise= (exercise, u_session, s_workout) => {
    
    return <div>
        <Exercise key={exercise.id} exercise={exercise} u_session={u_session} s_workout={s_workout}/>
    </div>
  }

  render(){
      let {workout} = this.props
      let {u_session} = this.props
    
      if (workout.length > 0){
        let exerciseList = workout.map(workoutItem=>{
            return <div>
                <h3>{workoutItem.component}</h3>
                {workoutItem.exercises.map(exercise=>this.renderExercise(exercise, u_session,workoutItem.session_workout))}
            </div>
        })
        return <div className="WorkoutDisplay"><ul>
        {exerciseList}
    </ul>
    <h2>All done!</h2>
    </div>
      }
      else {
          let exerciseList = "poop"
          return <div className="WorkoutDisplay"><ul>
        {exerciseList}
    </ul>
    
    </div>
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