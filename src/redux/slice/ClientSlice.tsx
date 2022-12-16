import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientI } from '../interfaces/Client';
import { AccountI } from '../interfaces/Account';
import { MovementI } from '../interfaces/MovementI';

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
    movements: [],
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
    setAccount(state, action: PayloadAction<AccountI>) {
      state.client.account = action.payload;
    },
    setMovements(state, action: PayloadAction<MovementI>) {
      state.client.account.movements.push(action.payload);
    },
  },
});

export const { setClient, setAccount, setMovements } = ClientSlice.actions;
export default ClientSlice.reducer;
