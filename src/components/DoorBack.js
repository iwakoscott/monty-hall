import React from 'react';
import DraggableCore from 'react-draggable';

const DoorBack = props => (
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
          <i className={`em em-${props.sportsCar ? 'car': 'goat'}`} style={{fontSize: 40}}></i>
        </div>
      </div>
    </DraggableCore>
);

export default DoorBack;
