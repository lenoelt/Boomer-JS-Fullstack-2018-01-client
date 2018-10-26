import React from 'react'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');


//send roomId, relocate to send only when room is joined
socket.emit('join_room', {roomId: "lol"});
socket.on('wez', function() {
  //received when room is destroyed
  document.getElementById('counter').append('1');
})

const RoomDetails = (props) => {
  const id = props.match.params.id;
  
  function send_wez() {
    socket.emit('wez', {});
  }

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

export default RoomDetails
