import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {withRouter} from 'react-router'
import './App.css';
import {Redirect} from 'react-router'
import WorkoutPage from './containers/WorkoutPage'
import MainWorkoutList from './containers/MainWorkoutList';
import Login from './components/Login'
import Signup from './components/Signup'
import Nav from './components/Nav'

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
      
      fetch("http://localhost:3001/api/v1/current",{
        headers:{
          "content-type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${token}`
        }
      }).then(r=>r.json())
        .then(workout=> workout.error ? 
          
          this.props.history.push('/login'): 
          this.setState({
            workout: workout.user_sessions
          })  
          // console.log(workout.user_sessions)
    )
    
  }
   
    else{
      this.props.history.push('/login')
    }

    
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
      console.log("Hello, I'm data!", data)
      localStorage.setItem("token",data.jwt);
      this.setState({
        user:data.user,
        workout: data.user.user_sessions
      })
    }
    ).then(this.props.history.push("/workouts"))
}

authUser = (e,userObj) => {
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
      console.log(this.props)
      console.log("Hello, I'm data!",data.user.user_sessions)
      localStorage.setItem("token", data.jwt);
      this.setState({
        user: data.user,
        workout: data.user.user_sessions
      })
      
    }).then(this.props.history.push("/workouts"))


}

 

  render(){
    return(
      
      <div >
      <Route render={routerProps=><Nav {...routerProps}/>} />
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

      <Route exact path="/" render={routerProps =><Login {...routerProps} submitHandler={this.authUser}/>} />
      <Route exact path="/login" render={routerProps=><Login {...routerProps} submitHandler={this.authUser}/>} />
      <Route exact path="/signup" render={routerProps=><Signup {...routerProps} submitHandler={this.createUser}/>}/>
      
      </div>
      
      
    )
}
}

export default withRouter(App)