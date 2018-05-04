import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getAllDoors } from '../utils/helpers';
import Stage from './Stage';
import DoorFront from './DoorFront';

class Start extends Component {

  constructor(props){
    super(props);
    this.state = {
      position: null,
      doorSelected: null
    } // state
  } // constructor

  handleDragEnd = (e, data, id) => {

    const { x, y } = data;
    if (y > 119){
      const confirmed = window.confirm(`Door ${id + 1} has been selected.`);
      if (confirmed){
        const doorSelected = {position: {x, y}, id};
        this.setState({ doorSelected });
        return false;
      } else {
        return this.setState({position: {x: 0, y: 0}});
      }
    }

  } // handleDragEnd

  render(){

    if (this.state.doorSelected !== null) {
      return <Redirect to={{
        pathname: '/stage-2',
        state: { from: this.props.location, doorSelected: this.state.doorSelected }
      }}/>
    }

    return (
      <Stage>
        {getAllDoors().map(id =>
          <DoorFront
            position={this.state.position}
            key={id}
            id={id}
            handleDragEnd={(e, data) => this.handleDragEnd(e, data, id) }/>)}
      </Stage>
    );
  }
} // Start

export default Start;
