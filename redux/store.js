import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducer/rootReducer";
import requests from "./reducer/requests";

const preloadedState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState
});

if (global.window)
  store.dispatch(requests.thunks.profile());

export default store;
