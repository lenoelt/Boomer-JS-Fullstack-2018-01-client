import React from 'react';

const UsersTopScores = ({ scores }) => {
  return (
    <div className="Top-Scores section">
      <ul className="collection with-header">
        <li className="collection-header center">
          <h4 className="goldText customTitleHeight animated zoomIn delay-0.2s">
            Top 5 scores
          </h4>
        </li>
        {scores &&
          scores.data.map(currScore => {
            return (
              <li className="collection-item" key={currScore.rank}>
                <div>
                  <span className="goldText">{currScore.rank}</span>.{' '}
                  {currScore.pseudo}
                  <span className="right animated flipInY delay-0.2s">
                    {' '}
                    {currScore.score}
                    <i className="material-icons right goldText">star_border</i>
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default UsersTopScores;
