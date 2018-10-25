import React from 'react';

const UserInfo = (props) => {
  const { auth } = props;
  return (
    <div className="Top-Scores section">
      <ul className="collection with-header">
        <li className="collection-header center"><h4>{auth.data.pseudo}</h4></li>
        <li className="collection-item"><div>Ranking: {auth.data.rank}</div></li>
        <li className="collection-item"><div>Score: {auth.data.score}</div></li>
        <li className="collection-item"><div>Defeats: {auth.data.defeat}</div></li>
      </ul>
    </div>
  )
}

export default UserInfo;