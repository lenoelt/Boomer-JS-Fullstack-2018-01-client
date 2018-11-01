import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RoomDetails } from '../../components/rooms/RoomDetails';
import { Redirect } from 'react-router-dom';

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000/');

socket.on('players', function(players) {
  console.log(players);
});

class Room extends Component {
  componentWillUnmount() {
    const id = this.props.match.params.id;
    socket.emit('leaveRoom', { roomId: id });
  }

  state = {
    redirect: false,
    score: this.props.auth.data.score
  };

  updateScore = score => {
    this.setState({
      ...this.state,
      score: score
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  setRedirectToTrue = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    socket.on('destroy', this.setRedirectToTrue);
    socket.on('score', this.updateScore);

    const id = this.props.match.params.id;
    const currentRoom = this.props.rooms.data.filter(room => room.id == id);

    //send roomId, relocate to send only when room is joined
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    }

    socket.emit('joinRoom', {
      roomId: id,
      userPseudo: this.props.auth.data.pseudo,
      userId: this.props.auth.data.id
    });

    function sendClick() {
      socket.emit('playerClick', {});
    }

    return (
      <div>
        <div>{this.renderRedirect()}</div>
        {/* <div>{this.updateScore()}</div> */}
        <RoomDetails
          auth={this.props.auth}
          room={currentRoom}
          score={this.state.score}
          sendWeez={sendClick}
          match={this.props.match}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    rooms: state.rooms.rooms,
    auth: state.auth.userData
  };
};

export default connect(mapStateToProps)(Room);
