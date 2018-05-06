import React, { Component } from 'react';
import Stage from './Stage';
import DoorFront from './DoorFront';
import DoorBack from './DoorBack';

import ReactCardFlip from 'react-card-flip';
import { getAllDoors } from '../utils/helpers';
import { Redirect, Link } from 'react-router-dom';


class Reveal extends Component {

  state = {
    reveal: false
  } // state

  componentDidMount(){
    setTimeout(() => this.setState({reveal: true}, () => {
      setTimeout(() => {
        const { sportsCar, doorSelected } = this.props.location.state;
        if (sportsCar === doorSelected.id){
          alert('You win a sports car!!!');
        } else {
          alert(`You didn't win a sports car but... you got a lovely goat 🐐`);
        }
      }, 500);
    }), 500);
  }

  render(){

    // if you didn't come from stage 2 send back to stage 1
    if (!this.props.location.state){
      return <Redirect to='/stage-1' />;
    }

    const { doorSelected, sportsCar, isFlipped } = this.props.location.state;
    return (
      <div>
        <div>
          { this.state.reveal && <Link to='/stage-1' className="btn btn-danger btn-block play-again-btn mb-5">Play Again?  <i style={{fontSize: '25px'}} className="em em-bear"></i></Link>}
        </div>
        <Stage>
          {getAllDoors().map(door => (
            <ReactCardFlip key={door} isFlipped={ isFlipped[door] || this.state.reveal}>
              <DoorFront
                key='front'
                id={door}
                disabled={true}
                handleDragEnd={null}
                position={ door === doorSelected.id ? doorSelected.position : null}/>
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
      </div>
    );
  } // render
} // Reveal

export default Reveal;
