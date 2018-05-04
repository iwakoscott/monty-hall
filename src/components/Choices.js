import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Stage from './Stage';
import { getAllDoors } from '../utils/helpers';
import Door from './Door';

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
  }

  render(){
    const { state } = this.props.location;
    if (state){
      const { doorSelected } = state;
      return (
        <Stage>
          {getAllDoors().map(door => (
            <Door
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
