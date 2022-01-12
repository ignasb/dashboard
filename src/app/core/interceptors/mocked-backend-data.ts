import { IUserCredentialsApi } from '../models/user-api';

export const users: IUserCredentialsApi[] = [
  {
    username: 'admin',
    password: 'admin',
    token: 'ADMIN_TOKEN',
    name: 'John Doe',
  },
  {
    username: 'user1',
    password: 'user1',
    token: 'USER1_TOKEN',
    name: 'Tom Thanks',
  },
];

export const sales = [
  {
    name: 'John Doe',
    amount: 2000,
    date: '2022-01-01',
  },
  {
    name: 'user1',
    amount: 1200,
    date: '2022-01-01',
  },
  {
    name: 'user2',
    amount: 900,
    date: 'date: 2022-01-01',
  },
  {
    name: 'John Doe',
    amount: 2400,
    date: '2022-01-02',
  },
  {
    name: 'user1',
    amount: 800,
    date: '2022-01-02',
  },
  {
    name: 'user2',
    amount: 2100,
    date: 'date: 2022-01-02',
  },
  {
    name: 'John Doe',
    amount: 4400,
    date: '2022-01-03',
  },
  {
    name: 'user1',
    amount: 2300,
    date: '2022-01-03',
  },
  {
    name: 'user2',
    amount: 100,
    date: 'date: 2022-01-03',
  },
];

export const bestSalesman = {
  name: 'John Doe',
  amount: 8800,
};
