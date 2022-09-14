import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
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
  },
});

export default appSlice.reducer;
export const { SET_LOADING } = appSlice.actions;
