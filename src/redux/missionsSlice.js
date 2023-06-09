import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const missionsSlice = createSlice({
  name: 'mission',
  initialState,

  reducers: {
    reservemission: (state, action) => {
      const id = action.payload;
      const newstate = state.missionList.map((mission) => {
        if (mission.id !== id) return mission;

        return {
          ...mission,
          missionValue: true,
          memberShip: 'Active member',
          missionStatus: 'Leave Mission',

        };
      });

      return {
        ...state, missionList: newstate,
      };
    },

    cancelmission: (state, action) => {
      const id = action.payload;
      const newstate = state.missionList.map((list) => {
        if (list.id !== id) return list;

        return {
          ...list,
          missionValue: false,
          memberShip: 'Not a Member',
          missionStatus: 'Join Mission',

        };
      });

      return {
        ...state, missionList: newstate,
      };
    },

  },
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

export const { reservemission, cancelmission } = missionsSlice.actions;

export default missionsSlice.reducer;
