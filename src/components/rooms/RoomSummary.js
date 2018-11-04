import React from 'react';
import { Link } from 'react-router-dom';

const RoomSummary = ({ room }) => {
  return (
    <div className="card medium sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator custoImg"
          src={room.difficulty.background}
          alt={room.difficulty.title}
        />
      </div>
      <div className="card-content">
        <span className="card-title activator">
          {room.difficulty.title}
          <i className="material-icons right animated flipInY delay-0.2s">
            more_vert
          </i>
        </span>
      </div>
      <div className="card-action">
        <Link
          to={'/room/' + room.id}
          className="left animated bounceIn delay-0.2s"
        >
          Rejoindre la partie
        </Link>
      </div>
      <div className="card-reveal">
        <span className="card-title goldText animated flipInY delay-0.2s">
          {room.difficulty.title}
          <i className="material-icons right closeCross">close</i>
        </span>
        <p className="white-text animated fadeInUp delay-0.2s">
          {room.difficulty.description}
        </p>
      </div>
    </div>
  );
};

export default RoomSummary;
