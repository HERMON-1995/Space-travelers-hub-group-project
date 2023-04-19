import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const reservedRockts = useSelector((state) => state.rocketsReducer.filter((rck) => rck.reserved));
  const misprfo = useSelector((state) => state.missionReducer.missionList
    .filter((mis) => mis.missionValue));

  return (
    <div className="row">
      <div className=" col-6">
        <h3 className="ms-5 mt-3">My Rockets</h3>
        <ul className="list-group ms-5">
          {reservedRockts.length ? reservedRockts.map((rocket) => <li key={rocket.id} className="list-group-item">{rocket.name}</li>) : <li className="list-group-item">No Reserved Rockets</li> }
        </ul>
      </div>
      <div className="col-6">
        <h3 className="ms-5 mt-3">My Missions</h3>
        <ul className="list-group ms-5">
          {misprfo.length ? misprfo.map((miss) => <li key={miss.id} className="list-group-item">{miss.missionName}</li>) : <li className="list-group-item">No Mission Reserved</li> }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
