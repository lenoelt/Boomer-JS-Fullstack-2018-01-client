import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const RoomDetails = (props) => {
  const { room } = props;

  if (room) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{room.title}</span>
            <p>{room.difficulty}</p>
            <p>{room.description}</p>
            <hr/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ad voluptatem, a voluptates quia ab facere rem magni ipsam repellendus molestias earum eligendi beatae soluta exercitationem non, dolor libero quos?</p>
          </div>
          <div className="card-action grey-lighten-4 grey-text">
            <div>{room.playersNb} Players left in the room</div>
          </div>
        </div>
      </div>
    )

  } else {
    return (
      <div className="container center">
        <p>Loading room...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;
  const rooms = state.firestore.data.rooms;
  const room = rooms ? rooms[id] : null;
  return {
    room: room
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "rooms" }
  ])
)(RoomDetails);
