import React from 'react';
import { Redirect } from 'react-router-dom';

export const RoomDetails = props => {
  const { auth } = props;

  if (!auth) return <Redirect to="/login" />;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Room Name - {props.match.params.id}
          </span>
          <button onClick={props.sendWeez}>WEEEEEEEEEEEZ</button>
          <p id="counter">0</p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>10 Players left in the room</div>
        </div>
      </div>
    </div>
  );
};
