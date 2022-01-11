import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ILoginCredentials } from '../models/data/user';
import { IUserCredentialsApi } from '../models/http/user-api';

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
}
