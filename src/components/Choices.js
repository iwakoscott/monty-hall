import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Stage from './Stage';
import { getAllDoors } from '../utils/helpers';
import DoorFront from './DoorFront';
import DoorBack from './DoorBack';
import ReactCardFlip from 'react-card-flip';

class Choices extends Component {

  constructor(props){
    super(props);
    this.state = {
      revealWinnings: false,
      doorsLeft: getAllDoors().filter(door => door !== props.location.state.doorSelected.id),
      sportsCar: Math.floor(Math.random()*3),
      isFlipped: {
        0: false,
        1: false,
        2: false
      }
    } // state
  } // constructor

  componentDidMount(){
    const { doorSelected } = this.props.location.state;
    const { doorsLeft, sportsCar } = this.state;
    const goatsLeft = doorsLeft.filter(door => door !== sportsCar);
    const goatToReveal = goatsLeft[Math.floor(Math.random()*goatsLeft.length)];

    setTimeout(() => {

      // reveal the left over goat
      this.setState(({ isFlipped, doorsLeft }) => ({
        doorsLeft: doorsLeft.find(door => door != goatToReveal),
        isFlipped: {
          ...isFlipped,
          [goatToReveal]: true
        }
      }), () => {
        // After the goal reveal, ask user if they want to swap their choice out for the left over door.
        setTimeout(() => {
          const confirmed = window.confirm(`You selected Door ${doorSelected.id + 1}. Would you like to swap your door for Door ${this.state.doorsLeft + 1}?`)
          this.setState({
            doorSelected: {
              ...doorSelected,
              id: confirmed ? this.state.doorsLeft : doorSelected.id
            },
            revealWinnings: true
          });
        }, 700);
      });
    }, 300);

  } // componentDidMount

  render(){
    const { state } = this.props.location;
    const { isFlipped, sportsCar, revealWinnings } = this.state;

    if (revealWinnings){
      return <Redirect to={{
        pathname: '/stage-3',
        state: { from: this.props.location, doorSelected: state.doorSelected }
      }}/>
    }

    if (state){
      const { doorSelected } = state;
      return (
        <Stage>
          {getAllDoors().map(door => (
            <ReactCardFlip key={door} isFlipped={isFlipped[door]}>
              <DoorFront
                key='front'
                id={door}
                disabled={true}
                handleDragEnd={null}
                position={door === doorSelected.id ? doorSelected.position : null}/>
              <DoorBack
                key='back'
                id={door}
                disabled={true}
                isCar={sportsCar === door}
                position={door === doorSelected.id ? doorSelected.position : null}
                handleDragEnd={null}
                />
            </ReactCardFlip>
          ))}
        </Stage>
      );
    }
    return <Redirect to='/stage-1' />;
  } // render

} // Choices

export default Choices;
