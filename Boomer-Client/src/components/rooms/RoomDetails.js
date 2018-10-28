import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000');

socket.on('players', function(players) {
  console.log(players);
})

socket.on('wez', function() {
  //received when room is destroyed
  document.getElementById('counter').append('1');
})

export const LeaveRoom = (props) => {  
  const id = props.match.params.id;
  socket.emit('leave_room', {roomId: id});
}

 export const RoomDetails = (props) => {
  const { auth } = props;
  const id = props.match.params.id;

  //send roomId, relocate to send only when room is joined
  socket.emit('join_room', {roomId: id});

  function send_wez() {
    socket.emit('wez', {});
  }

  if (!auth)
    return <Redirect to="/login" />

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Room Name - {id}</span>
          <button onClick={send_wez}>WEEEEEEEEEEEZ</button>
          <p id="counter">0</p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>10 Players left in the room</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.userData
  }
}

// export default (RoomDetails)
