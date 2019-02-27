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

  render(){
    let workoutList = this.state.sessions.map(session=> {return <li>
      {session.session.name}
    </li>

    })
    // {sessions} = this.state
    // console.log("Sidebar props", this.props)
    return <div className="WorkoutList"><ul>{workoutList}</ul></div>
    // (<div>
    
      
    //   <Route 
    //   path="/" 
    //   render={()=>(
    //           <WorkoutGroup clickHandler={this.submitButtonClicked} />
    //   )}
    //   />;
      
    //   {// DEFINE COLLECTION PATH/ MAIN SCREEN
    //   }
      
    //   <Route 
    //   path="/collection" 
    //   render={()=>(
    //           <AddToCollection characters={this.state.character} />
    //   )}
    //   />;

    //   </div>
    // )
  }
}

export default WorkoutGroup;


