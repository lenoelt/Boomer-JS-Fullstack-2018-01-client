import React from 'react';

const UserInfo = props => {
  const { auth } = props;
  return (
    <div className="Top-Scores section">
      <ul className="collection with-header">
        <li className="collection-header center">
          <h4 className="goldText customTitleHeight">{auth.data.pseudo}</h4>
        </li>
        <li className="collection-item">
          <div>
            Ranking
            <span className="right">
              {' '}
              25
              <i className="material-icons right goldText">
                format_list_numbered
              </i>
            </span>
          </div>
        </li>

        <li className="collection-item">
          <div>
            Score
            <span className="right">
              {' '}
              5 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>

        <li className="collection-item">
          <div>
            Defeats
            <span className="right">
              {' '}
              3<i className="material-icons right goldText">mood_bad</i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
