import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

class Nav extends Component {

    logout(history){
        localStorage.clear()
        this.props.history.push("/login")
    }

      render() {
        
        return (

            <div className="nav">
                <ul className='nav-ul'>
                <li className="nav-li"><Link to="/workouts">Profile</Link></li>
                <li className="nav-li-right"><Link to="/workouts">Every Day is Game Day</Link></li>
                <li className="nav-li" onClick={()=>this.logout()}> Logout</li>
                </ul>
            </div>
        )
      }
}

export default withRouter(Nav)


