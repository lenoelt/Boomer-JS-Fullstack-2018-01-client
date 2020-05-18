import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getRooms } from '../../store/actions/roomsActions';
import { getUserData } from '../../store/actions/usersActions';
import { getTopScores } from '../../store/actions/scoresAction';
import UsersTopScores from '../../components/dashboard/UsersTopScores';
import UserInfo from '../../components/dashboard/UserInfo';
import RoomsList from '../../components/rooms/RoomsList';

class Dashboard extends Component {
  componentDidMount() {
    if (this.props.auth) {
      this.props.getRooms();
      this.props.getTopScores();
      this.props.getUserData(this.props.auth.data.pseudo);
    } else {
      return <Redirect to="/login" />;
    }
  }

  render() {
    const { rooms, auth, user, scores } = this.props;
    if (!auth) return <Redirect to="/login" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col l4 m4 s12">
            <UserInfo auth={auth} UserInfo={user || auth.data} />
            <UsersTopScores scores={scores} />
          </div>

          <div className="col l8 m8 s12">
            <ul className="collection with-header">
              <li className="collection-header center">
                <h3>Welcome in Boomer !</h3>
                <p>
                  The more you click, the more points you earn. But be careful,
                  leave before the blow.
                </p>
              </li>
            </ul>
            <div className="white-text" />
            <div className="row">
              <RoomsList rooms={rooms} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.rooms,
  auth: state.auth.userData,
  user: state.user.userInfos,
  scores: state.scores.scores
});

const mapDispatchToProps = dispatch => ({
  getRooms: () => dispatch(getRooms()),
  getUserData: pseudo => dispatch(getUserData(pseudo)),
  getTopScores: () => dispatch(getTopScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
