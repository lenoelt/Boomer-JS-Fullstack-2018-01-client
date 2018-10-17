import React from 'react';
import evil from '../../assets/images/ssj.png';
import hard from '../../assets/images/sweat.png';
import easy from '../../assets/images/stairway.png';
import medium from '../../assets/images/trail.png';
import hideThePain from '../../assets/images/HideThePain.png'

const RoomSummary = ({ room }) => {

  let roomIMG = null;
  console.log(room.difficulty, roomIMG);
  switch (room.difficulty) {
    case "Evil":
      roomIMG = evil;
      break;
    case "Hard":
      roomIMG = hard;
      break;
    case "Medium":
      roomIMG = medium;
      break;
    case "Easy":
      roomIMG = easy;
      break;
    default:
      roomIMG = hideThePain;
      break;
  }

  console.log(roomIMG);

  {/* <div className="card z-depth-0 room-summary transparentBG">
      <div className="card-content white-text text-darken-3">
        <span className="card-title">{room.title}</span>
        <p>Difficulty: {room.difficulty}</p>
        <p>{room.description}</p>
        <p className="cyan-text text-lighten-1">{room.playersNb} Players</p>
      </div>
    </div> */}
  return (

    <div className="card">
      <div className="card-image">
        <img src={roomIMG} />
        <span className="card-title center">{room.title}</span>
      </div>

      <div className="card-content">
        <h4 className="center">{room.difficulty}</h4>
      </div>

      <div className="card-action">
        {room.playersNb} Players
      </div>
    </div>

  )
}

export default RoomSummary;