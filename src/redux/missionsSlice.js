import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {

  missionList: [],
  isActive: false,
  isAMember: false,
  isLoading: true,
  error: null,
};

export const getMission = createAsyncThunk('missionList/getMission', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

const missionsSlice = createSlice({
  name: 'mission',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMission.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getMission.fulfilled, (state, action) => {
        const mission = action.payload;
        const missionArray = [];
        mission.forEach((details) => missionArray.push({
          id: details.mission_id,
          missionName: details.mission_name,
          missionDescription: details.description,
          memberShip: 'Not a member',
          missionStatus: 'Join Mission',
          missionValue: false,

        }));

        return {
          ...state,
          missionList: missionArray,
          isLoading: false,
        };
      }).addCase(getMission.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default missionsSlice.reducer;
