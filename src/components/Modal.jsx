import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

class Modal extends Component {

      render() {
        const {exercise, clickHandler} = this.props
        console.log(exercise)
        return (
            <div className="modal" onClick={clickHandler}>
                <h3 className="modal-title">{exercise.name}</h3>
                <img className="modal-gif" alt="exercise animation" src={exercise.gif_url}></img>
                <div className="modal-description" dangerouslySetInnerHTML={{
                    __html: exercise.description
}}></div>
            </div>
        )
      }
}

export default Modal

