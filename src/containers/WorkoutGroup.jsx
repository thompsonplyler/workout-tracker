import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class WorkoutGroup extends Component {
  state={
    sessions:[]
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/user_sessions")
      .then(r=>r.json())
      .then(uSessions=>this.setState({sessions:uSessions}))
  }

  render()
      {let workoutList = this.state.sessions.map(session=> {
      return  <li onClick={()=> this.props.clickHandler(session)}>
                {session.session.name}
                  <br />
                  <br />
              </li>
    })

    return <div className="WorkoutList"><ul>{workoutList}</ul></div>
  }
}

export default WorkoutGroup;


