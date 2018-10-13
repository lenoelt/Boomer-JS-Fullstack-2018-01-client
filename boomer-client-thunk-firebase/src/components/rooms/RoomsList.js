import React from 'react';
import { Link } from 'react-router-dom';
import RoomSummary from './RoomSummary';

const RoomsList = ({ rooms }) => {
  return (
    <div className="rooms-list section">

      {rooms && rooms.map(room => {
        return (
          <Link to={"/room/" + room.id} key={room.id}>
            <RoomSummary room={room} />
          </Link>
        )
      })}
    </div>
  )
}

export default RoomsList;