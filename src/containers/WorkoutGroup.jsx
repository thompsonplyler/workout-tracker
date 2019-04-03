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
        let session = this.props.workout
        if (session.length>0){let workoutList = session.map(session=> 
          {
      return  <li className="side-li"
                key={session.id} 
                onClick={()=> this.props.clickHandler(session)}>
                <Link to={this.props.match}>{session.session.name}</Link>
                  <br />
                  <br />
              </li>
    })

    return <div className="side">
                <ul className="side-ul">{workoutList}</ul>
              </div>
            }
    else{
      return "Data loading. Please wait."
    }
  }
}

export default WorkoutGroup;


