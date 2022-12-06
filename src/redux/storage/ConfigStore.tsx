import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../slice/AuthSlice';
import ClientReducer from '../slice/ClientSlice'
export const ConfigStore = configureStore({
  reducer: {
    auth: AuthReducer,
    client: ClientReducer
  },
});
