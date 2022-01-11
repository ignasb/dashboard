import { ILoginCredentials } from '../data/user';

export interface IUserCredentialsApi extends ILoginCredentials {
  token: string;
  name: string;
}
