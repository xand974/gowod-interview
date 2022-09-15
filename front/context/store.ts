import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/app.slice";
import mobiTestSlice from "./slices/mobi-test.slice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    mobiTests: mobiTestSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
