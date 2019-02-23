import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class WorkoutGroup extends Component {
  state={
    wtf: []
  }

  componentDidMount(){

  }

  render(){
    return <div className="WorkoutList">Poop is poop is poop is poop</div>
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


