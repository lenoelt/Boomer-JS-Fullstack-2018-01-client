import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UsersTopScores from '../../components/dashboard/UsersTopScores';
import UserInfo from '../../components/dashboard/UserInfo';
import RoomsList from '../../components/rooms/RoomsList';

class Dashboard extends Component {
  toaster = (message) => {
    window.Materialize.toast(message, 4000)
  }

  render() {
    const { rooms, auth } = this.props;
    console.log("rooms : ", rooms);
    console.log("auth : ", auth);

    if (!auth)
      return <Redirect to="/login" />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className=" right col l12 m12 s12">
            {/* <a onClick={() => { this.toaster("Hello") }} class="btn">Toast!</a> */}
          </div>
        </div>
        <div className="row">
          <div className="col l4 m4 s12">
            <UserInfo auth={auth} />
            <UsersTopScores />
          </div>
          <div className="col l8 m8 s12">
            <div className="row">
              <RoomsList rooms={rooms} />
            </div>
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