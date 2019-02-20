import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class Workout extends Component {
  state={
    wtf: []
  }

  componentDidMount(){

  }

  render(){
    return <div className="BurgerDisplay">"Poop"</div>
    // DIV contains supersets, which contain exercises. 
    
    
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

export default Workout;


