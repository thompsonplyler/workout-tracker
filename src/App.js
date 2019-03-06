import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import WorkoutPage from './containers/WorkoutPage'
import MainWorkoutList from './containers/MainWorkoutList';
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  state={
    session: [],
    workout: [],
    u_session: "",
    completed: false,
    user: {}
  }

  paramsWorkout=(id)=>{
    let initial_session = this.state.workout.find(day => day.id===id)
    this.setState({
      session: initial_session.session_workouts.workouts,
      u_session: initial_session.id
    })
  }

  showWorkout=(session)=>{
    this.setState({
      session: session.session_workouts.workouts,
      u_session: session.id,
      completed: session.completed
    })
  }




  componentDidMount(){
    if(localStorage.getItem("token")){
      let token = localStorage.getItem("token")
      fetch("http://localhost:3001/api/v1/user_sessions/",{
        headers:{
          "content-type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${token}`
        }
      }).then(r=>r.json())
        .then(workout=> workout.error ? alert("You have to log in"): 
         
          this.setState({
      workout})
    )}

    
    // console.log("App props")
  }

  createUser = (e, userObj) => {
    let name = userObj.name
    let password = userObj.password
    let email = userObj.email
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/users",{
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accepts: "application/json"
        },
        body: JSON.stringify({user:{
            name: name,
            password: password,
          email: email}
        }) 
    }).then(r=>r.json())
    .then(data=>{
      console.log(data)
      localStorage.setItem("token",data.jwt);
      this.setState({user:data.user})
    }
    )
}

authUser = (e,userObj) => {
  let name = userObj.name
  let password = userObj.password
  let email = userObj.email
  e.preventDefault();
  fetch("http://localhost:3001/api/v1/login",{
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify({user:{
      email: email,
      password:password
    }
    })

  }).then(r=>r.json())
    .then(data=>{
      console.log(data)
      localStorage.setItem("token", data.jwt);
      this.setState({user:data.user})
    })


}

 

  render(){
    return(
      <Router>
      <div id="App">
      
      <Route exact path="/workouts" render={routerProps=> <MainWorkoutList clickHandler={this.showWorkout} {...routerProps} workout={this.state.workout}/>} />
      
      <Route path="/workouts/:workoutID" render={routerProps=> 
      
      <WorkoutPage {...routerProps} 
      clickHandler={this.showWorkout} 
      workout={this.state.workout}
      initial_session={this.state.session}
      paramsWorkout={this.paramsWorkout}
      u_session={this.state.u_session}
      completed={this.state.completed}
      
      />
    }/>

      <Route exact path="/" component={Login} />
      <Route exact path="/login" render={()=><Login submitHandler={this.authUser}/>} />
      <Route exact path="/signup" render={()=><Signup submitHandler={this.createUser}/>}/>
      
      </div>
      
      </Router>
    )
}
}

export default App