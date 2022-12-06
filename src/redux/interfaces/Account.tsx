import { MovementI } from './MovementI';
export interface AccountI {
    id: string;
    idClient: string;
    balance: string,
    credit: string,
    state: number,
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    movementsIncome: MovementI[];
    movementsOutcome: MovementI[];
}