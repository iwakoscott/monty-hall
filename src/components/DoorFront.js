import React from 'react';
import DraggableCore from 'react-draggable';

const DoorFront = props => (
    <DraggableCore
      bounds="#main"
      onStop={props.handleDragEnd}
      position={props.position}
      >
      <div
        className="card"
        style={{width: "10rem", height: "10rem"}}>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5>{props.id + 1}</h5>
          <i className="em em-door" style={{fontSize: 40}}></i>
        </div>
      </div>
    </DraggableCore>
);

export default DoorFront;
