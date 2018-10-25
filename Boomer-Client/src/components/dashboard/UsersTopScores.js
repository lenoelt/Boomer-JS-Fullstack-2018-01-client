import React from 'react';

const UsersTopScores = () => {
  return (
    <div className="Top-Scores section">
      <ul className="collection with-header">
        <li className="collection-header center"><h4>Top scores</h4></li>
        <li className="collection-item"><div>1. User 1<a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a></div></li>
        <li className="collection-item"><div>2. User 2<a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a></div></li>
        <li className="collection-item"><div>3. User 3<a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a></div></li>
        <li className="collection-item"><div>4. User 4<a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a></div></li>
      </ul>
    </div>
  )
}

export default UsersTopScores;