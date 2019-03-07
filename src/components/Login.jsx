import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        email: "",
        password: ""
      };
    
      changeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      submitHandler = e => {
        e.preventDefault();
        this.props.submitHandler(e, this.state);
        this.setState({
          email: "",
          password: ""
        });
      };

      render() {
        return (
          <div>
          <form onSubmit={(e)=>this.submitHandler(e)}>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
            <button>Log In</button>
          </form>
          <Link to="/signup">Sign-up</Link>
          </div> 

        );
      }
}

export default Login;


