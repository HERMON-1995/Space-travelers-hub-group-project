import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'FETCH_ROCKETS_STATUS';

const fetchRockets = async () => {
  const request = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await request.json();
  return data;
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
    };
    rocketsData.push(singleRocket);
  });
  return rocketsData;
});

const INITIAL_STATE = [];

const rockets = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveRockets.fulfilled, ((state, action) => action.payload))
    .addDefaultCase(((state) => [...state]));
}));

export default rockets;
