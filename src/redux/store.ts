import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { codeLeapApi } from "../redux/apiSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    [codeLeapApi.reducerPath]: codeLeapApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(codeLeapApi.middleware),
});

setupListeners(store.dispatch);

export default store;
