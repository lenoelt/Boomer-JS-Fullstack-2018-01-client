import React from 'react';
import RoomSummary from './RoomSummary';

const RoomsList = ({ rooms }) => {
  return (
    <div className="rooms-list section">
      {rooms &&
        rooms.data.map(room => {
          return (
            <div className="col l6 m8 s12" key={room.id}>
              <RoomSummary room={room} />
            </div>
          );
        })}
    </div>
  );
};

export default RoomsList;
