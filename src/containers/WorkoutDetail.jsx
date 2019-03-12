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

  finishWorkout=(u_session, s_completed)=>{
    console.log(u_session)
    console.log(s_completed)
    // fetch(`http://localhost:3001/api/v1/user_sessions/${u_session}`)
    // .then(r=>r.json())
    // .then(us=>console.log(us)

    let token = localStorage.getItem("token")
    
    fetch(`http://localhost:3001/api/v1/user_sessions/${u_session}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        completed: !s_completed }
      )}
      )
  }

  render(){
      let {workout, u_session, completed} = this.props
    
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
    <h2 onClick={()=>this.finishWorkout(u_session, completed)}>All done!</h2>
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