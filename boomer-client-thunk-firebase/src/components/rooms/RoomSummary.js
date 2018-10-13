import React from 'react';

const RoomSummary = ({ room }) => {
  return (
    <div className="card z-depth-0 room-summary transparentBG">
      <div className="card-content white-text text-darken-3">
        <span className="card-title">{room.title}</span>
        <p>Difficulty: {room.difficulty}</p>
        <p>{room.description}</p>
        <p className="cyan-text text-lighten-1">{room.playersNb} Players</p>
      </div>
    </div>
  )
}

export default RoomSummary;