import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkoutGroup extends Component {
  state={
    sessions:[]
  }

  componentDidMount(){

  }

  render()
      {
        console.log(this.props.match)
        let session = this.props.workout
        if (session.length>0){let workoutList = session.map(session=> 
          {
      return  <li 
                key={session.id} 
                onClick={()=> this.props.clickHandler(session)}>
                <Link to={this.props.match}>{session.session.name}</Link>
                  <br />
                  <br />
              </li>
    })

    return <div className="WorkoutList"><ul>{workoutList}</ul></div>}
    else{
      return "Data loading. Please wait."
    }
  }
}

export default WorkoutGroup;


