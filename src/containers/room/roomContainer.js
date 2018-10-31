import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RoomDetails } from '../../components/rooms/RoomDetails';

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000');

socket.on('players', function(players) {
  console.log(players);
});

socket.on('wez', function() {
  //received when room is destroyed
  document.getElementById('counter').append('1');
});

class Room extends Component {
  componentWillUnmount() {
    //LeaveRoom(this.props);
    const id = this.props.match.params.id;
    socket.emit('leave_room', { roomId: id });
  }

  render() {
    const id = this.props.match.params.id;

    //send roomId, relocate to send only when room is joined
    socket.emit('join_room', { roomId: id });

    function send_wez() {
      socket.emit('wez', {});
    }

    return (
      <RoomDetails
        auth={this.props.auth}
        sendWeez={send_wez}
        match={this.props.match}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.userData
  };
};

export default connect(mapStateToProps)(Room);
