import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientI } from '../interfaces/Client';

const initialState: ClientI = {
  id: '',
  fullName: '',
  email: '',
  phone: '',
  photo: 'https://www.gravatar.com/avatar/HASH',
  state: 1,
  createdAt: new Date(),
  updatedAt: null,
  account: {
    id: '',
    idClient: '',
    balance: '',
    credit: '',
    state: 0,
    createdAt: new Date(),
    updatedAt: null,
    deletedAt: null,
    movementsIncome: [],
    movementsOutcome: [],
  },
  app: {
    id: '',
    idClient: '',
    color: '',
    createdAt: new Date(),
    updatedAt: null,
  },
};

const ClientSlice = createSlice({
  name: 'client',
  initialState: {
    client: initialState,
  },
  reducers: {
    setClient(state, action: PayloadAction<ClientI>) {
      state.client = action.payload;
    },
  },
});

export const { setClient } = ClientSlice.actions;
export default ClientSlice.reducer;
