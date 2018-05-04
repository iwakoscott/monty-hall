import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Stage from './Stage';
import { getAllDoors } from '../utils/helpers';
import DoorFront from './DoorFront';

class Choices extends Component {

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
        const doorSelected = {x, y, id};
        this.setState({ doorSelected });
        return false;
      } else {
        return this.setState({position: {x: 0, y: 0}});
      }
    }

  } // handleDragEnd

  componentDidMount(){
    this.sportsCar = Math.floor(Math.random()*3);
    this.goats = getAllDoors().filter(door => door !== this.sportsCar);
    const { state } = this.props.location;
    if (state){
      const { doorSelected } = state;
      if (doorSelected.id === this.sportsCar){
        // if I chose the sportsCar then reveal any of the two doors remaining
      } else {
        // otherwise I didn't choose correctly, reveal the only goat left
      }
    }
  }

  render(){
    const { state } = this.props.location;
    if (state){
      const { doorSelected } = state;
      return (
        <Stage>
          {getAllDoors().map(door => (
            <DoorFront
                key={door}
                id={door}
                handleDragEnd={(e, data) => this.handleDragEnd(e, data, door)}
                position={door === doorSelected.id ? doorSelected.position : null}/>
          ))}
        </Stage>
      );
    }
    return <Redirect to='/stage-1' />;
  } // render

} // Choices

export default Choices;
