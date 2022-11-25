import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../slice/AuthSlice';
export const ConfigStore = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
