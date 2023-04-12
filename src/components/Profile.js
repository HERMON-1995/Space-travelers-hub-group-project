import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const reservedRockts = useSelector((state) => state.rocketsReducer.filter((rck) => rck.reserved));

  return (
    <div>
      <div className="container row col-6">
        <h3 className="ms-5 mt-3">My Rockets</h3>
        <ul className="list-group ms-5">
          {reservedRockts.length ? reservedRockts.map((rocket) => <li key={rocket.id} className="list-group-item">{rocket.name}</li>) : <li className="list-group-item">No Reserved Rockets</li> }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
