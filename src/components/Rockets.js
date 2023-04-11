import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveRockets } from '../redux/rocketsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rocket = (props) => {
  const { name, description, image } = props;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="bd-placeholder-img img-fluid rounded-start" width="100%" height="262" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button type="button" className="btn btn-primary my-5">Reserve Rocket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rocketsReducer);
  const renderRockets = (rocketsInfo) => rocketsInfo.map((rckt) => (
    <Rocket
      key={rckt.id}
      description={rckt.description}
      name={rckt.name}
      image={rckt.image}
    />
  ));
  return (
    <div className="container-fluid my-4">{renderRockets(rockets)}</div>
  );
}

export default Rockets;
