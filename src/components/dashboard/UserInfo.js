import React from 'react';

const UserInfo = props => {
  const { auth, UserInfo } = props;

  return (
    <div className="Top-Scores section">
      <ul className="collection with-header">
        <li className="collection-header center">
          <h4 className="goldText customTitleHeight animated zoomIn delay-0.2s">
            {auth.data.pseudo}
          </h4>
        </li>

        <li className="collection-item">
          <div>
            Score
            <span className="right animated flipInY delay-0.2s">
              {' '}
              {UserInfo.score}
              <i className="material-icons right goldText ">star_border</i>
            </span>
          </div>
        </li>

        <li className="collection-item">
          <div>
            Defeats
            <span className="right animated flipInY delay-0.2s">
              {' '}
              {UserInfo.defeat}
              <i className="material-icons right goldText animated flipInY delay-0.2s">
                mood_bad
              </i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
