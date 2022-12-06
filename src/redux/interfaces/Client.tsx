import { AccountI } from './Account';
import { AppI } from './App';
export interface ClientI {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  state: number;
  photo: string;
  createdAt: Date;
  updatedAt: Date | null;
  account: AccountI;
  app: AppI;
}
