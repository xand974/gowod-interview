import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  loading: boolean;
  deviceId: string;
}
const initialState: AppState = {
  loading: false,
  deviceId: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },

    SET_DEVICE_ID: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        deviceId: action.payload,
      };
    },
  },
});

export default appSlice.reducer;
export const { SET_LOADING, SET_DEVICE_ID } = appSlice.actions;
