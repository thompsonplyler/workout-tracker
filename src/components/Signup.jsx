import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
    state = {
        name: "",
        password: "",
        email: ""
      };
    
      changeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      submitHandler = (e) =>{
          this.props.submitHandler(e,this.state);
          this.setState({
              name: "",
              email: "",
              password: ""
          })
      }

    
      render() {
        return (
          <div>
            <form onSubmit={(e)=>this.props.submitHandler (e,this.state)}>
              <input
                type="text"
                placeholder="email"
                value={this.state.email}
                name="email"
                onChange={this.changeHandler}
              />
              <input
                type="name"
                placeholder="name"
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
              />
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                name="password"
                onChange={this.changeHandler}
              />
              <button>Sign Up</button>
            </form>
            <Link to="/login">Login</Link>
          </div>
          
        );
      }
}

export default Signup;


