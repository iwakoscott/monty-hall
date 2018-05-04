import React from 'react';


const Stage = props => (
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <div id="main" className="d-flex flex-column justify-content-around align-items-center" style={{height: "100vh"}}>
          <h1 className="text-center m-3">Emoji Monty Hall</h1>
          <div
            className="d-flex justify-content-center align-items-center">
            {props.children}
          </div>
          <div>
            <div id="end-zone" className="card" style={{ height: "11rem"}}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-center text-muted">Drag a Door Here</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Stage;
