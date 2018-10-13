const initState = {
  rooms: [
    { "id": "1", "title": "Room n°1", "description": "This is Room n°1, it is quite easy.", "difficulty": "Easy", "playersNb": "26" },
    { "id": "2", "title": "Room n°2", "description": "This is Room n°2, for a medium experience.", "difficulty": "Medium", "playersNb": "12" },
    { "id": "3", "title": "Room n°3", "description": "This is Room n°3, the challenge begins !", "difficulty": "Hard", "playersNb": "5" },
    { "id": "4", "title": "Room n°4", "description": "This is Room n°4, you'll die after the first click !", "difficulty": "Evil", "playersNb": "19" }
  ]
}

const roomsReducer = (state = initState, action) => {
  return state;
}

export default roomsReducer;