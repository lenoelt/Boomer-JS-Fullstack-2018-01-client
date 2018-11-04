import React from 'react';

const UsersTopScores = ({ scores }) => {
  return (
    <div className="Top-Scores section">
      <ul className="collection with-header">
        <li className="collection-header center">
          <h4 className="goldText customTitleHeight animated zoomIn delay-0.2s">
            Top scores
          </h4>
        </li>
        {scores &&
          scores.map(currScore => {
            return (
              <li className="collection-item" key={currScore.id}>
                <div>
                  <span className="goldText">{currScore.ranking}</span>.{' '}
                  {currScore.name}
                  <span className="right animated flipInY delay-0.2s">
                    {' '}
                    {currScore.score}
                    <i className="material-icons right goldText">star_border</i>
                  </span>
                </div>
              </li>
            );
          })}
        {/* <li className="collection-item">
          <div>
            <span className="goldText">1</span>. User 1
            <span className="right animated flipInY delay-0.2s">
              {' '}
              100000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">2</span>. User 2
            <span className="right animated flipInY delay-0.2s">
              {' '}
              90 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">3</span>. User 3
            <span className="right animated flipInY delay-0.2s">
              {' '}
              60 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">4</span>. User 4
            <span className="right animated flipInY delay-0.2s">
              {' '}
              20 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">5</span>. User 5
            <span className="right animated flipInY delay-0.2s">
              {' '}
              17 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default UsersTopScores;
