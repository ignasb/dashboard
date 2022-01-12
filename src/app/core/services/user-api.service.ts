import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginCredentials } from '../models/user';
import { IUserCredentialsApi } from '../models/user-api';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  PATH = 'user';

  constructor(private readonly httpClient: HttpClient) {}

  login$(credentials: ILoginCredentials): Observable<IUserCredentialsApi> {
    return this.httpClient.post<IUserCredentialsApi>(
      `/${this.PATH}/login`,
      credentials
    );
  }

  refreshToken$(userData: IUserCredentialsApi): Observable<string> {
    return this.httpClient.post<string>(`/${this.PATH}/refreshToken`, userData);
  }
}
