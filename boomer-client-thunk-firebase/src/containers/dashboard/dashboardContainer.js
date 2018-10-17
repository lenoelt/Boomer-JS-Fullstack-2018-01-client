import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import UsersTopScores from '../../components/dashboard/UsersTopScores';
import RoomsList from '../../components/rooms/RoomsList';

export class Dashboard extends React.Component {
  render() {
    const { rooms, auth } = this.props;

    if (!auth.uid)
      return <Redirect to="/login" />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col l8 m8 s12">
            <div className="row">
              <RoomsList rooms={rooms} />
            </div>
          </div>
          <div className="col l4 m4 s12">
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
    rooms: state.firestore.ordered.rooms,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "rooms" }
  ]))(Dashboard);