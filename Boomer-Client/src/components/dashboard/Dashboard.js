import React, { Component } from 'react';
import { connect } from 'react-redux'

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
  return {
    rooms: state.rooms.rooms
  }
}

export default connect(mapStateToProps)(Dashboard);