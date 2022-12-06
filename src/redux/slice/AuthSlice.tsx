import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  loading: false,
  loggedIn: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLogin(state) {
      state.loggedIn = true;
    },
    setLogout(state) {
      state.token = '';
      state.loggedIn = false;
    },
  },
});

export const { setToken, setLogin, setLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
