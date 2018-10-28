import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RoomDetails, LeaveRoom } from '../../components/rooms/RoomDetails';

class Room extends Component {

  componentWillUnmount() {
    LeaveRoom(this.props);
  }

  render() {
    return (
      <RoomDetails auth={this.props.auth} match={this.props.match}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.userData
  }
}

export default connect(mapStateToProps)(Room)