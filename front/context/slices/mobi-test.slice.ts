import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MobiTestModel } from "gowod_interview_types";

interface MobiTestState {
  tests: MobiTestModel[];
  current: MobiTestModel;
}
const initialState: MobiTestState = {
  tests: [],
  current: {} as MobiTestModel,
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

    SET_CURRENT_TEST: (state, action: PayloadAction<MobiTestModel>) => {
      return {
        ...state,
        current: { ...action.payload },
      };
    },

    ADD_ONE_TEST: (state, action: PayloadAction<MobiTestModel>) => {
      return {
        ...state,
        tests: [...state.tests, { ...action.payload }],
      };
    },

    RESET_CURRENT: (state) => {
      return {
        ...state,
        current: {} as MobiTestModel,
      };
    },
  },
});

export default mobiTestSlice.reducer;
export const { SET_TESTS, SET_CURRENT_TEST, ADD_ONE_TEST, RESET_CURRENT } =
  mobiTestSlice.actions;
