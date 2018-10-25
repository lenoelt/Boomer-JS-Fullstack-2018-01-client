import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="card small sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={roomIMG} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{room.difficulty}<i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-action ">
      <span>{room.playersNb} Players</span>
        <Link to={"/room/" + room.id} className="right">Rejoindre la partie</Link>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{room.difficulty}<i className="material-icons right">close</i></span>
        <p>{room.description}</p>
      </div>
    </div>
  )
}

export default RoomSummary;