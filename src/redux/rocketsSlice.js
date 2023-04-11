import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_ROCKETS = 'FETCH_ROCKETS_STATUS';
const RESERVE_ROCKETS = 'RESERVE_ROCKETS';

const fetchRockets = async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
};

export const retrieveRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetchRockets();
  const rocketsData = [];
  response.forEach((rocket) => {
    const singleRocket = {
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    };
    rocketsData.push(singleRocket);
  });
  return rocketsData;
});

export const reserveRocket = createAction(RESERVE_ROCKETS, (id) => ({
  payload: id,
}));

const INITIAL_STATE = [];

const rockets = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveRockets.fulfilled, ((state, action) => action.payload))
    .addCase(reserveRocket, ((state, action) => state.map((rocket) => (
      rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
    ))))
    .addDefaultCase((state) => [...state]);
}));

export default rockets;
