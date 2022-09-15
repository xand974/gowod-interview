import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MobiTestModel } from "gowod_interview_types";

interface MobiTestState {
  tests: MobiTestModel[];
}
const initialState: MobiTestState = {
  tests: [],
};

export const mobiTestSlice = createSlice({
  name: "mobiTests",
  initialState,
  reducers: {
    SET_TESTS: (state, action: PayloadAction<MobiTestModel[]>) => {
      return {
        ...state,
        tests: [...action.payload],
      };
    },
  },
});

export default mobiTestSlice.reducer;
export const { SET_TESTS } = mobiTestSlice.actions;
