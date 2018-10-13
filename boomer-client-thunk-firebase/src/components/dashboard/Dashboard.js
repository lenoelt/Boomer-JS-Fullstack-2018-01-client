import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import UsersTopScores from './UsersTopScores';
import RoomsList from '../rooms/RoomsList';

class Dashboard extends Component {
  render() {
    const { rooms } = this.props;
    console.log(rooms)

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <RoomsList rooms={rooms} />
          </div>
          <div className="col s12 m5 offset-m1">
            <UsersTopScores />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    rooms: state.firestore.ordered.rooms
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "rooms" }
  ]))(Dashboard);