import { ILoginCredentials } from './user';

export interface IUserCredentialsApi extends ILoginCredentials {
  token: string;
  name: string;
}
