import React from 'react';

const RoomDetails = props => {
  const { auth, room, score, players } = props;
  let difficultyColor = null;
  let colorArticle = null;

  switch (room[0].difficulty.title) {
    case 'Easy':
      difficultyColor = 'green-text';
      colorArticle = 'an';
      break;
    case 'Medium':
      difficultyColor = 'yellow-text';
      colorArticle = 'a';
      break;
    case 'Hard':
      difficultyColor = 'orange-text';
      colorArticle = 'a';
      break;
    case 'Evil':
      difficultyColor = 'red-text';
      colorArticle = 'an';
      break;
    default:
      colorArticle = 'a';
      difficultyColor = 'green-text';
      break;
  }

  const cardStyle = {
    backgroundImage: `url(${room[0].difficulty.background})`,
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
            <h3 className="center-align z-depth-5 clickEverywhere animated fadeIn delay-0.2s">
              Click everywhere !!!
            </h3>
          </div>
        </div>
        <div className="card-action white-text">
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="left animated bounceIn delay-0.2s">
                Your score : <span className="goldText">{score}</span>
                <i className="material-icons left goldText">star_border</i>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="right animated bounceIn delay-0.2s">
                <span className="goldText">{players}</span> Players left in the
                room
                <i className="material-icons right goldText">tag_faces</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;