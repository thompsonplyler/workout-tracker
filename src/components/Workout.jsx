import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import day1 from '../foundationA'
import Exercise from '../components/Exercise'

class Workout extends Component {
  
  state={
    wtf: []
  }

  componentDidMount(){

  }

  placeSection(workout){
  }
    // let sections = Object.values(workout)
  // let sectionArray = sections.map(section=>{
    // console.log("Section", Object.values(section))
    // let subsectionValues = Object.values(section)
    // let subsections = subsectionValues.map(subSection => subSection.name )
    // console.log("Subsections", subsections)
    // if (section.hasWorkout){

      // return <div><h3>{section.name}</h3>
  //   <table>
  //     <th></th>
  //   </table>
  //   </div>

  //   }
    

  // })
  //   return sectionArray

    // return "Poop"
    // for(let heading of obj) {
    //   console.log(heading)
    // }
    

    //     console.log(section) 
//     return <div><h3>{section[1].name}</h3>
// <table>

// </table>
//     </div>
  // }

  render(){
      const {workout} = this.props
      console.log("Am I real?", workout.session_workouts)
      const workoutList =(workout.session_workouts) ?  workout.session_workouts.workouts.map(component => {
      const bug = component.exercises.map(exercise => <Exercise exercise={exercise}/>)
      return <div><h3>{component.component}</h3>
      <div>{bug}</div></div>
      }) 
      : "Poop"; 
    return <div className="WorkoutDisplay">{workoutList}</div>
  }

  
    // console.log(Object.entries(day1))
    // return <div className="WorkoutDisplay">{this.placeSection(day1)}</div>
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
//   }
// }
}
export default Workout