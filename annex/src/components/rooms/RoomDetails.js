import React from 'react'

const RoomDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Room Name - {id}</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ad voluptatem, a voluptates quia ab facere rem magni ipsam repellendus molestias earum eligendi beatae soluta exercitationem non, dolor libero quos?</p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>10 Players left in the room</div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails
