import React from 'react';
import RoomSummary from './RoomSummary';

const RoomsList = ({ rooms }) => {
  return (
    <div className="rooms-list section">

      {rooms && rooms.map(room => {
        return (
          <RoomSummary room={room} key={room.id} />
        )
      })}

    </div>
  )
}

export default RoomsList;