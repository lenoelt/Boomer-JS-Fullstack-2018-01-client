import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getRooms } from '../../store/actions/roomsActions';
import { getUserData } from '../../store/actions/authenticationActions';
import UsersTopScores from '../../components/dashboard/UsersTopScores';
import UserInfo from '../../components/dashboard/UserInfo';
import RoomsList from '../../components/rooms/RoomsList';

class Dashboard extends Component {
  toaster = message => {
    window.Materialize.toast(message, 500);
  };

  componentDidMount() {
    this.props.getRooms();
    this.props.getUserData(this.props.auth.data.pseudo);
  }

  render() {
    const { rooms, auth, user } = this.props;
    console.log('user : ', user);
    console.log('auth : ', auth);

    if (!auth) return <Redirect to="/login" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className=" right col l12 m12 s12">
            <a
              onClick={() => {
                this.toaster('User 1 has joined the room !');
              }}
            >
              Toast!
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col l4 m4 s12">
            <UserInfo auth={auth} UserInfo={user ? user : auth.data} />
            <UsersTopScores />
          </div>
          <div className="col l8 m8 s12">
            <div className="row">
              <RoomsList rooms={rooms} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms.rooms,
    auth: state.auth.userData,
    user: state.user.userInfos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRooms: () => dispatch(getRooms()),
    getUserData: pseudo => dispatch(getUserData(pseudo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
