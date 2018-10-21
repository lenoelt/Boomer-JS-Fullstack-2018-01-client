import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UsersTopScores from '../../components/dashboard/UsersTopScores';
import RoomsList from '../../components/rooms/RoomsList';

class Dashboard extends Component {
  render() {
    const { rooms, auth } = this.props;
    console.log("auth : ", auth)

    if (!auth)
      return <Redirect to="/login" />

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
    rooms: state.rooms.rooms,
    auth: state.auth.userData
  }
}

export default connect(mapStateToProps)(Dashboard);