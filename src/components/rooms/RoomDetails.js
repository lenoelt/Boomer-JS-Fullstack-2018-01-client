import React from 'react';
import { Redirect } from 'react-router-dom';

import Easy1 from '../../assets/images/Easy1.png';
import Medium1 from '../../assets/images/Medium1.png';
import Hard1 from '../../assets/images/Hard1.png';
import Hard2 from '../../assets/images/Hard2.png';
import Evil1 from '../../assets/images/fire.jpg';

export const RoomDetails = props => {
  const { auth, room } = props;
  let difficultyColor = null;
  let colorArticle = null;
  let roomImg = null;

  if (!auth) return <Redirect to="/login" />;

  switch (room[0].difficulty.title) {
    case 'Easy':
      roomImg = Easy1;
      difficultyColor = 'green-text';
      colorArticle = 'an';
      break;
    case 'Medium':
      roomImg = Medium1;
      difficultyColor = 'yellow-text';
      colorArticle = 'a';
      break;
    case 'Hard':
      roomImg = Hard2;
      difficultyColor = 'orange-text';
      colorArticle = 'a';
      break;
    case 'Evil':
      roomImg = Evil1;
      difficultyColor = 'red-text';
      colorArticle = 'an';
      break;
    default:
      roomImg = { Easy1 };
      colorArticle = 'a';
      difficultyColor = 'green-text';
      break;
  }

  var cardStyle = {
    backgroundImage: 'url(' + roomImg + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div className="container section project-details">
      <div className="card">
        <div className="card-action white-text">
          <span className="card-title">
            Welcome {auth.data.pseudo}, this is {colorArticle}{' '}
            <span className={difficultyColor}>{room[0].difficulty.title}</span>{' '}
            room
          </span>
        </div>
        <div style={cardStyle} onClick={props.sendWeez} className="myContainer">
          <div className="card-content room-content white-text center-align">
            <h3 className="center-align z-depth-5 clickEverywhere">
              Click everywhere !!!
            </h3>
          </div>
        </div>
        <div className="card-action white-text">
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="left">
                Your score : <span className="goldText">{props.score}</span>
                <i className="material-icons left goldText">star_border</i>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="right">
                <span className="goldText">10</span> Players left in the room
                <i className="material-icons right goldText">tag_faces</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
