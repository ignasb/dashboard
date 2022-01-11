import { IUserCredentialsApi } from '../models/http/user-api';

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
