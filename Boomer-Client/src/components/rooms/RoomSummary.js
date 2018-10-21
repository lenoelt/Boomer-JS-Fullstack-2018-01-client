import React from 'react';
import { Link } from 'react-router-dom';

const RoomSummary = ({ room }) => {
  return (
    <div className="card z-depth-0 room-summary">
      <Link to={"/room/" + room.id}>
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{room.title}</span>
          <p>Difficulty: {room.difficulty}</p>
          <p>{room.description}</p>
          <p className="grey-text">{room.playersNb} Players</p>
        </div>
      </Link>
    </div>
  )
}

export default RoomSummary;