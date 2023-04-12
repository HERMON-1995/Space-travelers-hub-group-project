import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'FETCH_ROCKETS_STATUS';
const RESERVE_ROCKETS = 'RESERVE_ROCKETS';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const fetchRockets = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
};

export const retrieveRockets = createAsyncThunk(FETCH_ROCKETS, async (obj, thunkAPI) => {
  const currentState = thunkAPI.getState();
  if (currentState.rocketsReducer.length === 0) {
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
  }
  return currentState.rocketsReducer;
});

export const reserveRocket = createAction(RESERVE_ROCKETS, (id) => ({
  payload: id,
}));

export const cancelReservation = createAction(CANCEL_RESERVATION, (id) => ({
  payload: id,
}));

const INITIAL_STATE = [];

const rockets = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveRockets.fulfilled, ((state, action) => action.payload))
    .addCase(reserveRocket, ((state, action) => state.map((rocket) => (
      rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
    ))))
    .addCase(cancelReservation, ((state, action) => state.map((rocket) => (
      rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
    ))))
    .addDefaultCase((state) => [...state]);
}));

export default rockets;
