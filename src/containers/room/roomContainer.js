import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RoomDetails } from '../../components/rooms/RoomDetails';
import { Redirect } from 'react-router-dom';

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000');

socket.on('players', function(players) {
  console.log(players);
});

socket.on('score', function(score) {
  console.log(score);
});

class Room extends Component {
  componentWillUnmount() {
    const id = this.props.match.params.id;
    socket.emit('leaveRoom', { roomId: id });
  }

  state = {
    redirect: false
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  setRedirectToTrue = () => {
    console.log('Je rentre');
    this.setState({
      redirect: true
    });
  };

  render() {
    socket.on('destroy', this.setRedirectToTrue);

    const id = this.props.match.params.id;
    const currentRoom = this.props.rooms.data.filter(room => room.id == id);

    //send roomId, relocate to send only when room is joined
    if (this.props.auth) {
      socket.emit('joinRoom', {
        roomId: id,
        userPseudo: this.props.auth.data.pseudo,
        userId: this.props.auth.data.id
      });
    }

    function sendClick() {
      socket.emit('playerClick', {});
    }

    return (
      <div>
        <div>{this.renderRedirect()}</div>
        <RoomDetails
          auth={this.props.auth}
          room={currentRoom}
          sendWeez={sendClick}
          match={this.props.match}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms.rooms,
    auth: state.auth.userData
  };
};

export default connect(mapStateToProps)(Room);
