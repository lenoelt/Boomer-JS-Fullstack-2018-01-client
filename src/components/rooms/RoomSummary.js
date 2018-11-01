import React from 'react';
import { Link } from 'react-router-dom';

import evil from '../../assets/images/ssj.png';
import hard from '../../assets/images/sweat.png';
import easy from '../../assets/images/stairway.png';
import medium from '../../assets/images/trail.png';
import hideThePain from '../../assets/images/HideThePain.png';
import myEvil from '../../assets/images/Hard2.png';

const RoomSummary = ({ room }) => {
  let roomIMG = null;
  //https://media.giphy.com/media/MWL7evUUaBvzi/giphy.gif
  //https://i.gifer.com/RQnj.gif
  //https://media.giphy.com/media/EJDUScEsbFnUI/giphy.gif
  // https://media.giphy.com/media/Km0DSkleu3GkU/giphy.gif
  // https://media.giphy.com/media/MWL7evUUaBvzi/giphy.gif
  // https://media.giphy.com/media/NoqEh5YNQPT0s/giphy.gif

  switch (room.difficulty.title) {
    case 'Evil':
      roomIMG = myEvil;
      break;
    case 'Hard':
      roomIMG = hard;
      break;
    case 'Medium':
      roomIMG = medium;
      break;
    case 'Easy':
      roomIMG = easy;
      break;
    default:
      roomIMG = hideThePain;
      break;
  }

  return (
    <div className="card medium sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator custoImg" src={roomIMG} />
      </div>
      <div className="card-content">
        <span className="card-title activator">
          {room.difficulty.title}
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-action">
        <span className="goldText">NB</span>{' '}
        <span className="white-text">players</span>
        <Link to={'/room/' + room.id} className="right">
          Rejoindre la partie
        </Link>
      </div>
      <div className="card-reveal">
        <span className="card-title goldText">
          {room.difficulty.title}
          <i className="material-icons right closeCross">close</i>
        </span>
        <p className="white-text">{room.difficulty.description}</p>
      </div>
    </div>
  );
};

export default RoomSummary;
