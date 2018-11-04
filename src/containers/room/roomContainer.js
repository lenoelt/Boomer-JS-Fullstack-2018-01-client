import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RoomDetails } from '../../components/rooms/RoomDetails';
import { Redirect } from 'react-router-dom';
import { API_URL } from '../../environment';

import openSocket from 'socket.io-client';

const socket = openSocket(API_URL);

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      score: this.props.auth.data.score,
      players: 0
    };

    socket.emit('joinRoom', {
      roomId: this.props.match.params.id,
      userPseudo: this.props.auth.data.pseudo,
      userId: this.props.auth.data.id
    });

    socket.on('destroy', this.setRedirectToTrue);
    socket.on('score', this.updateScore);
    socket.on('players', this.updatePlayers);
  }

  componentWillUnmount() {
    const id = this.props.match.params.id;
    socket.emit('leaveRoom', { roomId: id });
  }

  updateScore = score => {
    this.setState({
      ...this.state,
      score: score
    });
  };

  updatePlayers = players => {
    this.setState({
      ...this.state,
      players: players
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  setRedirectToTrue = () => {
    this.setState({
      ...this.state,
      redirect: true
    });
  };

  render() {
    const id = this.props.match.params.id;
    const currentRoom = this.props.rooms.data.filter(room => room.id == id);

    //send roomId, relocate to send only when room is joined
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    }

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
          players={this.state.players}
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
