import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

class Nav extends Component {

    logout(history){
        localStorage.clear()
         // .history.push("/login")
        this.props.history.push("/login")
    }

      render() {
        
        return (

            <div>
                <Link to="/workouts">Workouts</Link>
                <div onClick={()=>this.logout()}> Logout</div>
                <br />
                <br />
                <br />
            </div>
        )
      }
}

export default withRouter(Nav)


